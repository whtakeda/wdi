var mongoose = require('mongoose');

// set mongoose's promise library to ES2015 Promises
mongoose.Promise = Promise;

var userSchema = new mongoose.Schema({
  email: String,
  name:  String,
  dob:   Date
});

// add bcrypt hashing to model (works on a password field)!
userSchema.plugin(require('mongoose-bcrypt'));

var User = mongoose.model('User', userSchema);

module.exports = User;
