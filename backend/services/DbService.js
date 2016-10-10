/**
 * <pre>
 *  var dbService = require('DbService')
 *  dbService.collection('boards', function(err, collection, db){
 *    collection.find({},{}).toArray(function(err, results){
 *      console.log('results',results)
 *    })
 *  })
 * </pre>
 */

var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
ObjectID = require('mongodb').ObjectID

var db = null
// Connection URL
var url = 'mongodb://localhost:27017/jrello' || process.env.MONGO_URL
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, _db) {
  if (err){
    console.err('unable to open db connection',err)
    process.exit(1)
  }else{
    db = _db
    console.log('connected to db')    
  }
})

exports.id = function(_id){
  if(typeof(_id) === 'string'){
    return ObjectID.createFromHexString(_id)
  }
  return _id
}

exports.collection = function(collectionName, callback){
  db.collection(collectionName, function(err, collection){
    callback(err, collection, db)
  })
}

process.on('exit', () => {
  db.close()
})

