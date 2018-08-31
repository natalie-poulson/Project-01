const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// const bcrypt = require('bcrypt');

const userSchema = new Schema({
name: {
    type: String,
    unique: true,
    required: true
  },
email: {
    type: String,
    unique: true,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
password: {
    type: String,
    required: true
  }
});

userSchema.set('toJSON', {
    transform: function(doc, ret, opt) {
        delete ret['password']
        return ret
    }
  })

// userSchema.pre('save', function (next) {
//     var user = this;
//     bcrypt.hash(user.password, 10, function (err, hash){
//       if (err) {
//         return next(err);
//       }
//       user.password = hash;
//       next();
//     })
//   });

const User = mongoose.model('User', userSchema);

module.exports = User;