const db = require('./index.js');
const list = require('./list.js');
const fullList = require('./fullList.json');
const { fakeData } = require('./10MJson.json');

const insertfullList = function () {
  list.create(fakeData)
    .then(() => db.disconnect());
};

insertfullList();

