const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const heritageSchema = new Schema({
name: String,
address: String,
yearOpened: String,
});

const Heritage = mongoose.model('Heritage', heritageSchema);

module.exports = Heritage;