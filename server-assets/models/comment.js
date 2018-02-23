var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = "Comment"

var schema = new Schema({
  desc:  {type: String, required: true, default: 'A Desc'},
  createdAt:  {type: Date, required: true, default: Date.now()},
  likes: {type: Number, required: true, min: 0, default: 4},
  userId: {type: ObjectId, required: true, ref: 'User'},
  postId: {type: ObjectId, required: true, ref: 'Post'}
})

module.exports = mongoose.model(schemaName, schema)
