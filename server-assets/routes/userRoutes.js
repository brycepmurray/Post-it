var User = require('../models/user')
var Post = require('../models/post')
var PostComment = require('../models/comment')

var router = require('express').Router()

// Get all Users
// router.get('/users', getAllUsers)
// // Get one User
// router.get('/users/:id', getOneUser)
// // Create a User
// router.post('/users', createUser)
// // Delete a User
// router.delete('/users/:id', deleteUser)
// // Update a User
// router.put('/users/:id', updateUser)
// // Get a post by user
// router.get('/users/:id/posts/:post_id', getPostByUser)
// // Get posts by user
 router.get('/users/:id/posts/', getPostsByUser)
// // Get a comment by user
// router.get('/users/:id/posts/:post_id/comments/:comment_id', getCommentByUser)
// // Get comments by user
// router.get('/users/:id/posts/:post_id/comments/', getCommentsByUser)

function getAllUsers(req, res, next) {
  User.find(req.query)
    .then(users => {
      res.send(users)
    })
    .catch(next)
}

function getOneUser(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      return res.send(user)
    })
    .catch(next)
}
function setActiveUser(req, res, next) {
  User.findOne(req.params.id)
    .then(user => {
      return res.send(user)
    })
    .catch(next)
}
function createUser(req, res, next) {
  User.create(req.body)
    .then(user => {
      return res.send({
        message: 'Sucessfully created a user',
        data: user
      })
    })
    .catch(next)
}

function deleteUser(req, res, next) {
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      return res.send({
        message: 'Sucessfully deleted a user'
      })
    })
    .catch(next)

  Post.deleteMany({
      userId: req.params.id
    })
    .then(() => {
      console.log('deleted user posts')
    })
    .catch(next)
    
  PostComment.deleteMany({
      userId: req.params.id
    })
    .then(() => {
      console.log('deleted user comments')
    })
    .catch(next)
}

function updateUser(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(user => {
      return res.send({
        message: 'Sucessfully updated user',
        data: user
      })
    })
    .catch(next)
}

function getPostsByUser(req, res, next) {
  Post.find({
      userId: req.params.id
    })
    .then(posts => {
      return res.send(posts)
    })
    .catch(next)
}

function getPostByUser(req, res, next) {
  Post.find({
      _id: req.params.id,
      postId: req.params.post_id
    })
    .then(post => {
      return res.send(post)
    })
    .catch(next)
}

function getCommentsByUser(req, res, next) {
  PostComment.find({
      userId: req.params.id,
      postId: req.params.post_id
    })
    .then(comments => {
      return res.send(comments)
    })
    .catch(next)
}

function getCommentByUser(req, res, next) {
  PostComment.find({
      _id: req.params.comment_id,
      userId: req.params.id,
      postId: req.params.post_id
    })
    .then(comment => {
      return res.send(comment)
    })
    .catch(next)
}

module.exports = {
  router
}