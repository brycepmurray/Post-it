var Comment = require('../models/comment')

var router = require('express').Router()

// Get all Comments
router.get('/comments', getAllComments)
// Get one Comment
router.get('/comments/:id', getOneComment)
// Create a Comment
router.post('/comments', CreateComment)
// Delete a Comment
router.delete('/comments/:id', DeleteComment)
// Update a Comment
router.put('/comments/:id', UpdateComment)

function getAllComments(req, res, next) {
  Comment.find(req.query)
    .then(comments => {
      res.send(comments)
    })
    .catch(next)
}

function getOneComment(req, res, next) {
  Comment.findById(req.params.id)
    .then(comment => {
      return res.send(comment)
    })
    .catch(next)
}

function CreateComment(req, res, next) {
  Comment.create(req.body)
    .then(comment => {
      return res.send({
        message: 'Sucessfully created a comment',
        data: comment
      })
    })
    .catch(next)
}

function DeleteComment(req, res, next) {
  Comment.findByIdAndRemove(req.params.id)
    .then(comment => {
      return res.send('Sucessfully deleted a comment')
    })
    .catch(next)
}

function UpdateComment(req, res, next) {
  Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(comment => {
      return res.send({
        message: 'Sucessfully updated comment',
        data: comment
      })
    })
    .catch(next)

}


module.exports = {
  router
}