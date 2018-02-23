var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = "Post"

var schema = new Schema({
  title: {type: String, required: true},
  desc:  {type: String, required: true},
  createdAt:  {type: Date, required: true, default: Date.now()},
  imgUrl: {type: String, required: true},
  likes: {type: Number, required: true, min: 0},
  dislikes: {type: Number, required: true, min: 0},
  userId: {type: ObjectId, required: true, ref: 'User'}
})


module.exports = mongoose.model(schemaName, schema)
