var express = require('express')
var morgan = require('morgan')
var app = express()
var livereload = require('livereload')
var server = livereload.createServer()
server.watch('.')

app.use(morgan('combined'))
app.use(require('connect-livereload')({
  port: 35729
}))

app.use(require('./backend/controllers/MyMainController'))

app.listen(3000, function () {
  console.log('listening on port 3000')
})
