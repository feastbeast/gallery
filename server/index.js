const express = require('express');
var path = require('path');
var fs = require('fs');
const bodyParser = require('body-parser');
var requestImg = require('request').defaults({ encoding: null })
const url = require('url');

const list = require('../database/list.js');

const app = express();
const PORT = 2002;
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/restaurants/', express.static(__dirname + '/../client/dist'));

app.get('/restaurants/:id', function(req , res){
 res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
})

app.get('/api/restaurants/:id/gallery', function(req , res){

  
  var query = list.findOne({"place_id": req.params.id});
  
  query.exec(function(err, photos){

  	if(err){
  		console.log(err);
  	} else{
  		//console.log(photos.photos);
  		var s3String = "//s3-us-west-1.amazonaws.com/apateezgallery93/"
  		//res.send(photos.photos);
  		//photos = Array.prototype.slice.call(photos);
  		var restaurantPhotosArray = [];
  		//console.log(Array.isArray(photos.photos));
  		//console.log(photos.photos[0].photo_reference);
  		for (var i = 0; i < photos.photos.length; i++ ){
  		  var s3String = "//s3-us-west-1.amazonaws.com/apateezgallery93/"+ photos.photos[i].photo_reference +	".png";
          //console.log(s3String);
          restaurantPhotosArray.push(s3String); 
  		}
      
  		res.send({photoArray: restaurantPhotosArray, restaurantName: photos.name, place_id: photos.place_id});
      
  	}
  })

});
app.get('/:searchValue', function(req , res){
  var searchQuery = req.params.searchValue;
  var recursefindPlaceId = function(searchQuery){

    var query = list.findOne({"name": { "$regex": searchQuery, "$options": "i" }});
    query.exec(function(err, photos){
        if(err){
          console.log(err);
        } else{
          if(photos){
            res.send({place_id: photos.place_id});
          } else{
            searchQuery = searchQuery.slice(0, -1)
            recursefindPlaceId(searchQuery);
          }
        }
    }); 
    
  }
  recursefindPlaceId(searchQuery);
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
