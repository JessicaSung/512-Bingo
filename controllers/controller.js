var express = require('express');
var router = express.Router();
var model = require('../models/bingo.js');


router.get('/', function(req, res) {
  res.render('index');
})

router.get('/menu', function(req, res) {
  res.render('menu');
})

router.get('/add', function(req, res) {
  res.render('add');
})




module.exports = router;
