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

test('the second character of createEntry should be a pipe when the index is a single digit number', () => {
  expect(createEntry(1)[1]).toBe('|');
});

test('the third character of createEntry should be a pipe when the index is a double digit number', () => {
  expect(createEntry(15)[2]).toBe('|');
});

test('createEntry should return a string with the passed in value as the first character', () => {
  expect(createEntry(1)[0]).toBe('1');
});