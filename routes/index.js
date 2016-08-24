var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Force.com Streaming API Demo with nforce' });
});

router.get('/default', function(req, res) {
  res.render('default', { title: 'Force.com Streaming API Demo with nforce' });
});

module.exports = router;
