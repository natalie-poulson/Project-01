const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", { useNewUrlParser: true });

const Legacy = require("./legacy");
const Heritage = require("./heritage");
const User = require('./user');

exports.Legacy = Legacy;
exports.Heritage = Heritage;
exports.User = User;