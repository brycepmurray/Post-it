var Post = require('../models/post')
var PostComment = require('../models/comment')

var router = require('express').Router()

// Get all Posts
router.get('/posts', getAllPosts)
// Get one Post
router.get('/posts/:id', getOnePost)
// Create a Post
router.post('/posts', createPost)
// Delete a Post
router.delete('/posts/:id', deletePost)
// Update a Post
router.put('/posts/:id', updatePost)
// Get Comments by Post
router.get('/posts/:id/comments', getCommentsByPost)
// Get Comment by Post
router.get('/posts/:id/comments/:comment_id', getCommentByPost)

function getCommentsByPost(req, res, next) {
  PostComment.find({ postId: req.params.id })
    .then( comments => {
      res.send(comments)
    })
    .catch(next)
}

function getCommentByPost(req, res, next) {
  PostComment.find({ postId: req.params.id, _id: req.params.comment_id })
    .then( comment => {
      res.send(comment)
    })
    .catch(next)
}

function getAllPosts(req, res, next) {
  Post.find(req.query)
    .then(posts => {
      res.send(posts)
    })
    .catch(next)
}

function getOnePost(req, res, next) {
  Post.findById(req.params.id)
    .then(post => {
      return res.send(post)
    })
    .catch(next)
}

function createPost(req, res, next) {
  Post.create(req.body)
    .then(post => {
      return res.send({
        message: 'Sucessfully created a post',
        data: post
      })
    })
    .catch(next)
}

function deletePost(req, res, next) {
  Post.findByIdAndRemove(req.params.id)
    .then(post => {
      return res.send('Sucessfully deleted a post')
    })
    .catch(next)
}

function updatePost(req, res, next) {
  Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(post => {
      return res.send({
        message: 'Sucessfully updated post',
        data: post
      })
    })
    .catch(next)

}


module.exports = {
  router
}