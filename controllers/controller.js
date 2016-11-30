// DEPENDENCIES
// ==============================================
var express = require('express');
var models = require('../models');
var passwordHash = require('password-hash');


// SETUP EXPRESS SERVER
// ==============================================
var router = express.Router();
var currentUser;

models.sequelize.sync();


// displays the homepage
router.get('/', function(req, res) {
  res.render('index');
})

// if a valid username/password is entered, user will be set as "currentUser"
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

// user sign up stores email and password
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

// if user is set to "currentUser" above, user will see the menu page, otherwise redirected to the homepage
router.get('/menu', function(req, res) {
  if(currentUser) {
    res.render('menu');
  } else {
    res.render('index');
  }
})

// displays categories for user to choose
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

// displays cards available for play
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

// displays user's badges
router.get('/my-badges', function(req, res) {
  if(!currentUser) {
    res.render('index')
  } else {
    res.render('userBadges');
  }
})

// diplays gamecard for play
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
        square: arrayParsed,
        title: result.dataValues.card_name
      }

      res.render('gameBoard', data);
    })
  }
})

// check for previously found items
router.post('/play/:card', function(req, res) {
  var cardName = req.params.card;
  console.log(cardName);

  // check if user's active card matches
  // current card name
  models.Users.findOne({
    attributes: ['active_card'],
    where: {
      user_name: currentUser
    }
  }).then(function(response) {
    var active_card = response.dataValues.active_card;
    models.Gamecards.findOne({
      attributes: ['card_name'],
      where: {
        id: active_card
      }
    }).then(function(result) {
      if(result > 0 && result.dataValues.card_name === cardName) {
        // get user's found items
        models.Users.findOne({
          attributes: ['items_found'],
          where: {
            user_name: currentUser
          }
        }).then(function(result) {
          res.send(result);
        })
      } else {
        res.send(false);
      }
    })
  })
})

// set new active card
router.post('/activate/:card', function(req, res) {
  var newActiveCard = req.params.card;
  // finds id of card from name
  models.Gamecards.findOne({
    attributes: ['id'],
    where: {
      card_name: newActiveCard
    }
  }).then(function(result) {
    // set id to active_card value
    var id = result.dataValues.id;
    models.Users.update(
      {
        active_card: id
      },
      {
        where: {
        user_name: currentUser
        }
      }
    )
  }).then(function() {
    res.send(true);
  })
})

// add newly found items to database
router.post('/found', function(req, res) {
  var data = req.body['foundBoxes[]'];
  var foundBoxes = data.toString();
  console.log(foundBoxes);
  foundBoxes = foundBoxes.replace(/[\[\]]/g, '');
  console.log(foundBoxes);
  models.Users.update(
    {
      items_found: foundBoxes
    },
    {
      where: {
        user_name: currentUser
      }
    }
  ).then(function() {
    res.send(true);
  })

})

// displays user's badges

router.get('/badge', function(req, res) {
  if(!currentUser) {
    res.render('index');
  } else {
    res.render('newBadge');
  }
})

router.post('/badge', function(req, res) {
  console.log('here');
  models.Users.findOne({
    where: {
      user_name: currentUser
    }
  }).then(function(result) {
    result.increment('badge_level');
  }).then(function() {
    models.Users.findOne({
      attributes: ['badge_level'],
      where: {
        user_name: currentUser
      }
    }).then(function (result) {
      res.send(result);
    })
  })
})

// user can submit a card
router.get('/add', function(req, res) {
  if(!currentUser) {
    res.render('index');
  } else {
    res.render('add');
  }
})


// Export router
// =============================================================================
module.exports = router;
