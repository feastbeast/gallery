const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/apateez-gallery';

const db = mongoose.connect(mongoUri);

module.exports = db;
