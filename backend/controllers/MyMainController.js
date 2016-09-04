var express = require('express')
var router = express.Router()
router.use('/bower_components', express.static('bower_components'))

router.use('/index.html', express.static('index.html'))
// main.css might be in one of three places..
router.use('/style', express.static('.tmp/style'))
router.use('/style', express.static('style'))
router.use('/style', express.static('app/style'))
router.use('/fonts', express.static('fonts'))
router.use('/app', express.static('app'))

router.get('/', function (req, res) {
  res.redirect('/index.html')
})

router.get('/name', function (req, res) {
  res.send('world')
})

module.exports = router
