var express = require('express');
var router = express.Router();
var model = require('../models/bingo.js');


router.get('/', function(req, res) {
  res.render('index');
})

router.get('/menu', function(req, res) {
  res.render('menu');
})

router.get('/menu/:category', function(req, res) {
  res.render('categoryMenu');
})

router.get('/my-games', function(req, res) {
  res.render('userGames');
})

router.get('/my-badges', function(req, res) {
  res.render('userBadges');
})

router.get('/play', function(req, res) {
  res.render('gameBoard');
})

router.get('/badge', function(req, res) {
  res.render('newBadge');
})

router.get('/add', function(req, res) {
  res.render('add');
})




module.exports = router;
