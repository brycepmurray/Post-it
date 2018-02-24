var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = "Comment"

var schema = new Schema({
  desc:  {type: String, required: true},
  createdAt:  {type: Date, required: true, default: Date.now()},
  likes: {type: Number, required: true, min: 0},
  dislikes: {type: Number, required: true, min: 0},
  userId: {type: ObjectId, required: true, ref: 'User'},
  postId: {type: ObjectId, required: true, ref: 'Post'}
})

module.exports = mongoose.model(schemaName, schema)
