var mongoose = require('mongoose')
var moment = require('moment')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = "Comment"

var schema = new Schema({
  desc: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  likes: {
    type: Number,
    required: true,
    min: 0
  },
  dislikes: {
    type: Number,
    required: true,
    min: 0
  },
  userId: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  postId: {
    type: ObjectId,
    required: true,
    ref: 'Post'
  },
  parentCommentId: {
    type: ObjectId,
    ref: 'Comment'
  }
})

module.exports = mongoose.model(schemaName, schema)