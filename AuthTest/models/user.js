var mongoose = require('mongoose');

var userScheme = new mongoose.Scheme({
  email: { type: String, unique: true, lowercase: true},
  password: String,
});

module.exports = mongoose.model('User', UserSchema);
