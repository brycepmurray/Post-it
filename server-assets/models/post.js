var mongoose = require('mongoose')
var moment = require('moment')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = "Post"

var schema = new Schema({
  title: {
    type: String,
    required: false
  },
  desc: {
    type: String,
    required: false
  },
  createdAt: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  imgUrl: {
    type: String,
    required: false,
    default: 'http://placehold.it/200X200'
  },
  likes: {
    type: Number,
    default: 0,
    min: 0
  },
  dislikes: {
    type: Number,
    default: 0,
    min: 0
  },
  userId: {
    type: ObjectId,
    required: false,
    ref: 'User'
  }
})

module.exports = mongoose.model(schemaName, schema)