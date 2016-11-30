'use strict';

var models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.Gamecards.bulkCreate(
      [
        {
          card_name: "Food",
          item: "The Highball, Mueller Food Trucks, Ego’s, Hipster Eating a Taco, Peddle Bar, Bar Patio Food Truck, Amy’s Ice Cream, Whole Foods Lamar",
          category: "Food"
        },
        {
          card_name: "Weird",
          item: "Bum Fighting, Esther’s Follies, Chicken Shit Bingo, Hippie Hollow, Leslie Cochran Statue, Cathedral of Junk, Museum Of The Weird, Street Dancing Guy",
          category: "Weird"
        },
        {
          card_name: "Places",
          item: "The Capital, Castle Hill Graffiti, Stevie Ray Statue, Zilker Park, I Love You So Much, Hi How Are You, Barton Springs Pool, UT Tower",
          category: "Places"
        },
        {
          card_name: "Do Things",
          item: "Paddle Boarder, Sixth Street, Congress Ave Bridge, Hamilton Pool, Austin Panic Room, Peter Pan Mini Golf, Mount Bonnellfies, Blue Cat Cafe",
          category: "Do Things"
        },
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return models.Gamecards.destroy(
      {where:
        {card_name: [
        "Food",
        "Weird",
        "Places",
        "Do Things"
        ]},
      }
    )
  }
};
