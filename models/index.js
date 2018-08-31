const mongoose = require("mongoose");
mongoose.connect( "mongodb://localhost/jwt-auth", {useNewUrlParser: true});

const Legacy = require("./legacy");
const Heritage = require("./heritage");
const User = require('./user');

exports.Legacy = Legacy;
exports.Heritage = Heritage;
exports.User = User;