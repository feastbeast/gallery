const fullList = require('./fullList.json');
const fs = require('fs');

const getPhotoList = () => {
  const list = [];
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < fullList[i].result.photos.length; j++) {
      list.push(fullList[i].result.photos[j].photo_reference);
    }
  }
  return list;
}

module.exports.getPhotoList = getPhotoList();