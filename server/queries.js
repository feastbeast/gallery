const promise = require('bluebird');

const redis = require('redis');

const client = redis.createClient();
const { promisify } = require('util');

const getAsync = promisify(client.get).bind(client);

const mockData = require('./mockData.js');

const options = {
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);

const connectionString = 'postgres://localhost:5432/gallery';
const db = pgp(connectionString);

const getRestaurantInfo = (req, res, next) => {
  const id = req.params.id;
  db.any('SELECT * FROM lists WHERE place_id = $1', id)
    .then((data) => {
      res.status(200);
      let s3String = '';
      const restaurantPhotosArray = [];
      if (!data[0].photos) {
        data[0] = mockData;
      }
      for (let i = 0; i < data[0].photos.length; i += 1) {
        s3String = `//s3-us-west-1.amazonaws.com/apateezgallery100/${data[0].photos[i]}.png`;
        restaurantPhotosArray.push(s3String);
      }
      const info = {
        photoArray: restaurantPhotosArray,
        restaurantName: data[0].name,
        place_id: data[0].place_id,
      };
      res.send(info);
      client.setex(id, 3600, JSON.stringify(info));
    })
    .catch(err => next(err));
};

const getCache = (req, res) => {
  const id = req.params.id;
  return getAsync(id).then((result) => {
    if (result) {
      res.send(result);
    } else {
      getRestaurantInfo(req, res);
    }
  });
};

module.exports = {
  getRestaurantInfo,
  getCache,
};
