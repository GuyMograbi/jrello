var express = require('express')
var morgan = require('morgan')
var app = express()
var livereload = require('livereload')
var lrServer = livereload.createServer()
var bodyParser = require('body-parser')
var ws = require('ws')
var http = require('http')
var _ = require('lodash')

lrServer.watch('./app/')

app.use(morgan('combined',{
  skip: function(req, res){
    return req.url.indexOf('browser-sync') >= 0
  }
}))
app.use(require('connect-livereload')({
  port: 35729
}))

app.use(require('./backend/controllers/StaticController'))
app.use(bodyParser.json()) // for parsing application/json
app.use('/backend', require('./backend/controllers/BoardsController'))

var server = http.createServer(app)

var wss = new ws.Server({server: server, path: '/backend/websocket'})
var wsArr = []
wss.on('connection', function (ws) {
  console.log('connection')

  wsArr.push(ws)
  ws.on('open', function () {
    console.log('connected')
  })

  ws.on('close', function () {
    _.pull(wsArr, ws)
  })
})

var boardEvents = require('./backend/services/BoardEvents')
boardEvents.emitter.on(boardEvents.EVENTS.BOARD_UPDATE, function (data) {
  console.log('event data is', data)
  _.each(wsArr, function (ws) {
    try {
      ws.send(JSON.stringify({'type': 'boardUpdate', 'data': data}))
    } catch (e) {
      console.error('unable to send event. removing web socket', e)
      _.pull(wsArr, ws)
    }
  })
})

server.listen(3000, function () {
  console.log('listening on port 3000')
})
