var express = require('express');
var router = express.Router();
var models = require('../models');
var passwordHash = require('password-hash');

models.sequelize.sync();

router.get('/', function(req, res) {
  res.render('index');
})

router.post('/', function(req, res) {
  var data = req.body;
  var userName = data.email;
  models.Users.findAll({
    attributes: ['password'],
    where: {
      user_name: userName,
    }
  }).then(function(result) {
    if(result.length == 0) {
      res.send(false);
      return false;
    }

    var resultPassword = result[0].dataValues.password;
    var verifyPassword = passwordHash.verify(data.password, resultPassword);
    console.log(verifyPassword);
    if(verifyPassword) {
      res.send(true);
    } else {
      res.send(false);
    }
  })
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
