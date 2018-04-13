const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/apateez';

const db = mongoose.connect(mongoUri);

module.exports = db;
