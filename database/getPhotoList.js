const fullList = require('./fullList.json');

const getPhotoList = () => {
  const list = [];
  for (let i = 0; i < 100; i += 1) {
    for (let j = 0; j < fullList[i].result.photos.length; j += 1) {
      list.push(fullList[i].result.photos[j].photo_reference);
    }
  }
  return list;
};

module.exports.getPhotoList = getPhotoList();
