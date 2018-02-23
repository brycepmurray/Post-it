var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = "Post"

var schema = new Schema({
  _id: String,
  title: {type: String, required: true, default: 'A Title'},
  desc:  {type: String, required: true, default: 'A Desc'},
  createdAt:  {type: Date, required: true, default: Date.now()},
  imgUrl: {type: String, required: true, default: 'http://placehold.it/200x200'},
  likes: {type: Number, required: true, min: 0, default: 4},
  userId: {type: ObjectId, required: true, ref: 'User'}
})

module.exports = mongoose.model(schemaName, schema)
