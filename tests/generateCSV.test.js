const { getRandomTenPhotoReferences, createEntry, writeData } = require('../database/generateCSV.js');

test('getRandomTenPhotosReferences should generate an array of 10', () => {
  expect(getRandomTenPhotoReferences().length).toBe(10);
});

test('getRandomTenPhotosReferences should generate random arrays', () => {
  const array1 = getRandomTenPhotoReferences();
  const array2 = getRandomTenPhotoReferences();
  expect(array1).not.toBe(array2);
});

test('createEntry should return a string', () => {
  expect(typeof createEntry(1)).toBe('string');
});

test('createEntry should return a string with the passed in value as the first character', () => {
  expect(createEntry(1)[0]).toBe('1');
});