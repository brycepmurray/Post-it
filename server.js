var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

require('./server-assets/db/mlab-config')

var server = express()
var port = 3000

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.listen(port, () => {
  console.log('Server running on port', port)
})