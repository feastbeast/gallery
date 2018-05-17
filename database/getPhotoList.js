const getPhotoList = () => {
  const list = [];
  for (let i = 0; i < 992; i += 1) {
    list.push(i);
  }
  return list;
};

module.exports.getPhotoList = getPhotoList();
