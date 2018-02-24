var mongoose = require('mongoose')
var user = 'students'
var pswd = 'test'
var connectionStr = `mongodb://${user}:${pswd}@ds044907.mlab.com:44907/post_it`
var connection = mongoose.connection

mongoose.connect(connectionStr)

connection.on('error', err => {
  console.log('mLab error', err)
})

connection.on('open', () => {
  console.log('mLab is up!')
})