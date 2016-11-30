var express = require('express');
var router = express.Router();
var models = require('../models');
var passwordHash = require('password-hash');


models.sequelize.sync();

var currentUser;

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

    if(verifyPassword) {
      res.send(true);
      currentUser = userName;
      console.log(currentUser);
    } else {
      res.send(false);
    }
  })
})

router.post('/signup', function(req, res) {
  console.log(req.body)
  var email = req.body.email;
  var password = req.body.password;
  var hashedPassword = passwordHash.generate(password);
  models.Users.findAll({
    where: {
      user_name: email
    }
  }).then(function(result) {
    if(result.length > 0) {
      res.send(false);
    } else {
      models.Users.create({
        user_name: email,
        password: hashedPassword,
        active_card: 0,
        items_found: null,
        badge_level: 0
      }).then(function() {
        res.send(true);
        currentUser = email;
      })
    }
  })
})

router.get('/menu', function(req, res) {
  if(currentUser) {
    res.render('menu');
  } else {
    res.render('index');
  }
})

router.get('/menu/:category', function(req, res) {
  if(!currentUser) {
    res.render('index');
  } else {
    var category = req.params.category.replace(/-/g, ' ');

    models.Gamecards.findAll({
      attributes: ['card_name'],
      where: {
        category: category
      }
    }).then(function(result) {
      var data = {
        category: category,
        card: result
      }

      res.render('categoryMenu', data);
    })
  }
})

router.get('/my-games', function(req, res) {
  if(!currentUser) {
    res.render('index')
  } else {
    models.Users.findAll({
      attributes: ['active_card'],
      where: {
        user_name: currentUser
      }
    }).then(function(result) {
      var activeCards = result[0].dataValues.active_card;
      console.log(activeCards);
      models.Gamecards.findAll({
        attributes: ['card_name'],
        where: {
          id: activeCards
        }
      }).then(function(result) {
        var data = {
          card: result
        }

        res.render('userGames', data);
      })
    })
  }
})

router.get('/my-badges', function(req, res) {
  if(!currentUser) {
    res.render('index')
  } else {
    res.render('userBadges');
  }
})

router.get('/play/:cardName', function(req, res) {
  if(!currentUser) {
    res.render('index');
  } else {
    var cardName = req.params.cardName;
    models.Gamecards.findOne({
      where: {
        card_name: cardName
      }
    }).then(function(result) {
      console.log(result.dataValues.item)
      var arrayString = result.dataValues.item;
      var arrayParsed = arrayString.split(', ');
      console.log(arrayParsed);
      var data = {
        square: arrayParsed
      }

      res.render('gameBoard', data);

    })
  }
})

router.post('/play', function(req, res) {
  models.Users.findOne({
    attributes: ['items_found'],
    where: {
      user_name: currentUser
    }
  }).then(function(result) {
    res.send(result);
  })
})

router.get('/badge', function(req, res) {
  if(!currentUser) {
    res.render('index');
  } else {
    res.render('newBadge');
  }
})

router.get('/add', function(req, res) {
  if(!currentUser) {
    res.render('index');
  } else {
    res.render('add');
  }
})









module.exports = router;
