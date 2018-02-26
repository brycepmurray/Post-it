var Users = require('../models/user')
var router = require('express').Router()

// You never create a route like '/api/users' -- except perhaps for a priveledged admin user

router.post('/auth/register', (req, res) => { // never call 'next' inside an auth route!
  req.body.password = Users.generateHash(req.body.password)  // don't bother with a confirmPassword on backend -- use that for front-end validation
  Users.create(req.body)
    .then( user => {
      if(!user) {
        return res.status(401).send({error: 'Invalid username and/or password'})
      }
      user.password = null // probably Mongoose doesn't let you delete the password!!
      delete user.password // don't send the (hashed) password to the front-end
      req.session.uid = user._id // save the userId into the session
      res.send(user)
    })
    .catch( err => {
      res.status(401).send({error: 'Invalid username and/or password'}) // do not send the 'err' object back -- giving too much info to potential hackers!
    })
})

router.post('/auto/login', (req, res) => {
  Users.findOne({email: req.body.email})
    .then( user => {
      if(!user) {
        return res.status(401).send({error: 'Invalid username and/or password'})
      }
      if (!user.validatePassword(req.body.password)) {
        return res.status(401).send({error: 'Invalid username and/or password'})
      }
      user.password = null // probably Mongoose doesn't let you delete the password!!
      delete user.password // don't send the (hashed) password to the front-end
      req.session.uid = user._id // save the userId into the session
      res.send(user)
    })
    .catch( err => {
      res.status(401).send({error: 'Invalid username and/or password'}) // do not send the 'err' object back -- giving too much info to potential hackers!
    })
})

module.exports = router