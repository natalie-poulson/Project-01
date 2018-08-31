const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const legacySchema = new Schema({
name: String,
address: String,
yearOpened: String,
coordinates: [Number],
// user: {
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'User'
// }
});

const Legacy = mongoose.model('Legacy', legacySchema);

module.exports = Legacy;