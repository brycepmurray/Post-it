var mongoose = require('mongoose')
var moment = require('moment')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = "Post"

var schema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    imgUrl: {
        type: String,
        required: true,
        default: 'http://placehold.it/200X200'
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
    userName: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model(schemaName, schema)