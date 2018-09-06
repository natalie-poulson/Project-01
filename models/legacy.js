const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const legacySchema = new Schema({
    name: String,
    address: String,
    yearOpened: String,
    website: String,
    coordinates: [Number]
});

const Legacy = mongoose.model('Legacy', legacySchema);

module.exports = Legacy;