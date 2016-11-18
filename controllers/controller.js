var express = require('express');
var router = express.Router();
var model = require('../models/bingo.js');


router.get('/', function(req, res) {
  res.send('index');
})

router.get('/menu', function(req, res) {
  res.send('menu');
})

router.get('/add', function(req, res) {
  res.send('add');
})




module.exports = router;
