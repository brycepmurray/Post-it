var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var moment = require('moment')

require('./server-assets/db/mlab-config')

var server = express()
var port = 3000

var authRoutes = require('./server-assets/auth/authRoutes')
var session = require('./server-assets/auth/session')

var userRoutes = require('./server-assets/routes/userRoutes')
var postRoutes = require('./server-assets/routes/postRoutes')
var commentRoutes = require('./server-assets/routes/commentRoutes')

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use(authRoutes)

server.use('/api/*', (req, res, next) => { // gateway for all following routes
  if(req.method.toLowerCase() != 'get' && !req.session.uid) {
      return res.status(401).send({error: 'Please log in to continue'})
  }
  next()
})

server.use('/api', userRoutes.router)
server.use('/api', postRoutes.router)
server.use('/api', commentRoutes.router)

server.use('*', (err, req, res, next) => {
  res.status(400).send(err)
})

server.listen(port, () => {
  console.log('Server running on port', port)
})