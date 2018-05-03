const faker = require('faker');
const fs = require('fs');
const { getPhotoList } = require('./getPhotoList.js');

const entryNum = 10;

const getRandomTenPhotoReferences = () => {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const randomIndex = Math.floor(Math.random() * 992);
    list.push(getPhotoList[randomIndex]);
  }
  return list;
};

const createEntry = (index) => {
  const data = {
    name: faker.lorem.words(),
    place_id: index.toString(),
    photos: getRandomTenPhotoReferences(),
  };
  return data;
};

const options = {
  autoClose: true,
};

const writeData = () => {
  const writeStream = fs.createWriteStream('database/10MJson.json', options);
  let i = -1;
  const write = () => {
    let ok = true;
    do {
      i += 1;
      if (i === 0) {
        writeStream.write(`[${JSON.stringify(createEntry(i))},`);
      } else if (i === entryNum) {
        writeStream.write(`${JSON.stringify(createEntry(i))}]`);
      } else {
        ok = writeStream.write(`${JSON.stringify(createEntry(i))},`);
      }
    } while (i < entryNum && ok);
    if (i < entryNum) {
      writeStream.once('drain', write);
    }
  };
  write();
};

writeData();
