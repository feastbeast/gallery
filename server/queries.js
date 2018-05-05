const promise = require('bluebird');

const mockData = require('./mockData.js');

const options = {
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);

const connectionString = 'postgres://localhost:5432/fec';
const db = pgp(connectionString);

const getRestaurantInfo = (req, res, next) => {
  db.any('SELECT * FROM reviews WHERE place_id = $1', req.params.id)
    .then((data) => {
      res.status(200);
      let s3String = '';
      const restaurantPhotosArray = [];
      if (!data[0].photos) {
        data[0].photos = mockData;
      }
      for (let i = 0; i < data[0].photos.length; i += 1) {
        s3String = `//s3-us-west-1.amazonaws.com/apateezgallery100/${data[0].photos[i]}.png`;
        restaurantPhotosArray.push(s3String);
      }
      res.json({ photoArray: restaurantPhotosArray, restaurantName: data[0].name, place_id: data[0].place_id });
    })
    .catch(err => next(err));
};

module.exports.getRestaurantInfo = getRestaurantInfo;
