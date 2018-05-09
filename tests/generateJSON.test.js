const { getRandomTenPhotoReferences, createEntry, writeData } = require('../database/generateJSON.js');

test('getRandomTenPhotosReferences should generate an array of 10', () => {
  expect(getRandomTenPhotoReferences().length).toBe(10);
});

test('getRandomTenPhotosReferences should generate random arrays', () => {
  const array1 = getRandomTenPhotoReferences();
  const array2 = getRandomTenPhotoReferences();
  expect(array1).not.toBe(array2);
});

test('createEntry should return an object', () => {
  expect(typeof createEntry(1)).toBe('object');
});

test('createEntry should return an object with the passed in value as place_id', () => {
  expect(createEntry(1).place_id).toBe('1');
});


