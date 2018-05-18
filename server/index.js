const { getCache } = require('./queries.js');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const list = require('../database/list.js');
const cluster = require('cluster');

const compression = require('compression');

if (cluster.isMaster) {
  const numWorkers = require('os').cpus().length;
  console.log(`Master cluster setting up ${numWorkers} workers...`);
  for (let i = 0; i < numWorkers; i += 1) {
    cluster.fork();
  }
  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  const app = express();
  const PORT = 3002;
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
  app.use(compression());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/restaurants/', express.static(`${__dirname}/../client/dist`));

  app.get('/restaurants/:id', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../client/dist/index.html`));
  });

  app.get('/api/restaurants/:id/gallery', getCache);

  app.get('/:searchValue', (req, res) => {
    let searchQuery = req.params.searchValue;
    const recursefindPlaceId = () => {
      const query = list.findOne({ name: { $regex: searchQuery, $options: 'i' } });
      query.exec((err, photos) => {
        if (err) {
          throw (err);
        } else if (photos) {
          res.send({ place_id: photos.place_id });
        } else {
          searchQuery = searchQuery.slice(0, -1);
          recursefindPlaceId(searchQuery);
        }
      });
    };
    recursefindPlaceId();
  });
}

