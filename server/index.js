const express = require('express');
var path = require('path');
var fs = require('fs');
const bodyParser = require('body-parser');
var requestImg = require('request').defaults({ encoding: null })
const url = require('url');

const list = require('../database/list.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/:id', function(req , res){
 res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
})

app.get('/:id/gallery', function(req , res){
  console.log(req);
  
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
  // //find().skip(1).limit(2).pretty();
   // list.find().limit(100).find(function(err, data){
   //    res.send(data);
   // });
  // var j =1;
  // list.find(function(err, data){
  //    if (err){
  //     console.log(err);
  //    } else{

  //    	data.map(function(restaurant){

  //    		restaurant.photos.map(function(photo){
  //              //photo_reference = photo.photo_reference;
  //              requestImg.get
	 //                 ("https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference="+photo.photo_reference+"&key=AIzaSyD7olNRQRLF6mNFwI0dyEyECWNqF8xXNZQ", function(error, response, body){
		//          if (error){
		// 	       console.log(error)
            
		//          }else{
		//          console.log("writeFile---" + photo.photo_reference);	
		// 	       fs.writeFile(__dirname+'/n/'+ photo.photo_reference+'.png', body, function(){console.log(j++)} );
		//          }
	 //           })
  //          })

  //    	})  
  //   }
     
  // })

    // res.end();

      // list.find(function(err, data){
 //     if (err){
 //     	console.log(err);
 //     } else{
 //     	for (var i = 0; i < data.length; i++){
 //     		id = data[i].place_id;
 //     		fs.mkdirSync(path.join(__dirname+'/photos', id))

 //     	}
 //     	res.end();
 //     }
 //  })

});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



 // list.find(function(err, data){
 //     if (err){
 //     	console.log(err);
 //     } else{
 //     	for (var i = 0; i < data.length; i++){
 //     		id = data[i].place_id;
 //     		fs.mkdirSync(path.join(__dirname+'/photos', id))

 //     	}
 //     	res.end();
 //     }
 //  })