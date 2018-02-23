var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

require('./server-assets/db/mlab-config')

var server = express()
var port = 3000

var userRoutes = require('./server-assets/routes/userRoutes')
var postRoutes = require('./server-assets/routes/postRoutes')
var commentRoutes = require('./server-assets/routes/commentRoutes')

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


server.use('/api', userRoutes.router)
server.use('/api', postRoutes.router)
server.use('/api', commentRoutes.router)

server.use('*', (err, req, res, next) => {
  // console.log('error',err)
  res.status(400).send(err)
})

server.listen(port, () => {
  console.log('Server running on port', port)
})