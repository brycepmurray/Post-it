var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = "User"

var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    required: true
  },
  active: {
    type: Boolean
  }
})

module.exports = mongoose.model(schemaName, schema)