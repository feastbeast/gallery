const faker = require('faker');
const fs = require('fs');
const { getPhotoList } = require('./getPhotoList.js');

const entryNum = 10000000;

const getRandomTenPhotoReferences = () => {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const randomIndex = Math.floor(Math.random() * 992);
    list.push(getPhotoList[randomIndex]);
  }
  return list;
};

const createEntry = (index) => {
  let entry = '';
  const photoReferences = getRandomTenPhotoReferences();
  const str = `{${photoReferences.slice(1, photoReferences.length - 1)}}`;
  entry = `${index}|${faker.lorem.words()}|${str}\n`;
  return entry;
};

const options = {
  autoClose: true,
};

const writeData = () => {
  const writeStream = fs.createWriteStream('./10MCSV.csv', options);
  let i = -2;
  const write = () => {
    let ok = true;
    do {
      i += 1;
      if (i === -1) {
        writeStream.write('place_id,name,photos\n');
      } else if (i === entryNum) {
        writeStream.write(createEntry(i).slice(0, createEntry(i).length - 1));
      } else {
        ok = writeStream.write(createEntry(i));
      }
    } while (i < entryNum && ok);
    if (i < entryNum) {
      writeStream.once('drain', write);
    }
  };
  write();
};

writeData();
