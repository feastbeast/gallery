// require('newrelic');
// const { getCache, getRestaurantInfo } = require('./queries.js');
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const list = require('../database/list.js');
// const responseTime = require('response-time');
// // const { mockData } = require('./mockData.js');

// const app = express();
// const PORT = 3002;

// app.use(responseTime());
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/restaurants/', express.static(`${__dirname}/../client/dist`));

// app.get('/restaurants/:id', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/../client/dist/index.html`));
// });

// // Uncomment for mongodb
// // app.get('/api/restaurants/:id/gallery', (req, res) => {
// //   const query = list.findOne({ place_id: req.params.id });
// //   query.exec((err, data) => {
// //     if (err) {
// //       throw (err);
// //     } else {
// //       let s3String = '//s3-us-west-1.amazonaws.com/apateezgallery100/';
// //       const restaurantPhotosArray = [];
// //       if (data === null) {
// //         data = mockData;
// //       }
// //       for (let i = 0; i < data.photos.length; i += 1) {
// //         s3String = `//s3-us-west-1.amazonaws.com/apateezgallery100/${data.photos[i]}.png`;
// //         restaurantPhotosArray.push(s3String);
// //       }
// //       res.send({
// //         photoArray: restaurantPhotosArray,
// //         restaurantName: data.name,
// //         place_id: data.place_id,
// //       });
// //     }
// //   });
// // });


// // Uncomment for postgres
// app.get('/api/restaurants/:id/gallery', getCache);

// app.get('/:searchValue', (req, res) => {
//   let searchQuery = req.params.searchValue;
//   const recursefindPlaceId = () => {
//     const query = list.findOne({ name: { $regex: searchQuery, $options: 'i' } });
//     query.exec((err, photos) => {
//       if (err) {
//         throw (err);
//       } else if (photos) {
//         res.send({ place_id: photos.place_id });
//       } else {
//         searchQuery = searchQuery.slice(0, -1);
//         recursefindPlaceId(searchQuery);
//       }
//     });
//   };
//   recursefindPlaceId();
// });


// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });
