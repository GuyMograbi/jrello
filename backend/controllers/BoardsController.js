var express = require('express')
var router = express.Router()
var boardEvents = require('../services/BoardEvents')

var board = null

router.post('/boards', function (req, res) {
  board = req.body
  boardEvents.emitter.boardUpdated(board)
  res.send({'status': 'ok'})
})

router.get('/boards', function (req, res) {
  res.send(board)
})

module.exports = router
