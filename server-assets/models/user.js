var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')
var Schema = mongoose.Schema
var schemaName = "User"
const SALT_FACTOR = 13

var schema = new Schema({
  name: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    // minlength: 6
  },
  photoUrl: {
    type: String,
    required: true
  },
  // active: {
  //   type: Boolean
  // }
})

schema.statics.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_FACTOR))
}

schema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model(schemaName, schema)
