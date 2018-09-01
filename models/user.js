const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true},
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    password: { type: String, required: true}
    // password: { type: String, required: true , select: false}
})

// userSchema.set('toJSON', {
//   transform: function(doc, ret, opt) {
//       delete ret['password']
//       return ret
//   }
// })

const User = mongoose.model('User', userSchema);

module.exports = User;