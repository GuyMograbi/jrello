var express = require('express')
var router = express.Router()
var boardEvents = require('../services/BoardEvents')
var dbService = require('../services/DbService')

var board = null

function BoardModel () {
}

BoardModel.collectionName = 'boards'

setTimeout(function () {
  dbService.collection('boards', function (err, _collection) {
    BoardModel.collection = _collection
  })
}, 1000)


BoardModel.getOrCreate = function (callback) {
  return BoardModel.collection.find({}, {}).limit(1).toArray(function (err, result) {
    if (!result || result.length === 0) {
      BoardModel.collection.insert({}, function (err, result) {
        console.log('this is error', err)
        callback(err, result);
      })
    } else {
      callback(err, result[0])
    }
  })
}
BoardModel.update = function (data, callback) {
  console.log({_id: dbService.id(data._id)})
  var _id = dbService.id(data._id)
  delete data._id
  return BoardModel.collection.updateOne({_id: _id},data, callback)
}


router.post('/boards', function (req, res) {
  var board = req.body
  console.log('saving board', board)
  BoardModel.update(board, function(err,result){
    if (err){
      console.log('error updating the board',err)
      res.status(500).send({'status':'error','reason' : 'error updating :: ' + err.toString()})
    }else{
      console.log('result is',result.result);
      BoardModel.getOrCreate(function(err,result){
        if (err){
          console.log('error reading after update',err)
          res.status(500).send({'status':'error','reason' : 'error reading after update :: ' + err.toString() }) 
        }else {
          boardEvents.emitter.boardUpdated(result)
          res.send({'status': 'ok'})
        }
      })
    }
  })
})

router.get('/boards', function (req, res) {
  BoardModel.getOrCreate(function (err, result) {
    res.send(result)
  })
})

module.exports = router
