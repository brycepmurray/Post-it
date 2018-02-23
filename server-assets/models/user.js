var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = "User"

var schema = new Schema({
  _id: {type: String},
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  photoUrl: {type: String, required: true},
  active: {type: Boolean}
})

module.exports = mongoose.model(schemaName, schema)
