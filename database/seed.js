const db  = require('./index.js');
const list = require('./list.js')
var fullList = require('./fullList.json');
const insertfullList = function() {
  list.create(fullList)
    .then(() => db.disconnect());
};

insertfullList();

