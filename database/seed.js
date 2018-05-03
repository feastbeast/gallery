const db = require('./index.js');
const list = require('./list.js');
const { fakeData } = require('./10MJson.json');

const insertfullList = () => {
  list.create(fakeData)
    .then(() => db.disconnect());
};

insertfullList();

