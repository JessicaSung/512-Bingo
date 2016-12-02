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
        {
          card_name: "Swimming Holes",
          item: "Deep Eddy, Hippie Hollow, Twin Falls, Sculpture Falls, Honey Hole, Gus Fruh, Lost Creek, Secret Beach",
          category: ""
        },
        {
          card_name: "Breweries",
          item: "Austin Beerworks, Adelbert's, 512 Brewing Co, Hops and Grain, Jester King, Independence Brewing Co, Live Oak, Zilker Brewing Co",
          category: ""
        },
        {
          card_name: "Parks & Rec",
          item: "Lady Bird Lake, Zilker, Commons Ford, Mary Moore Searight, Pease Park, Auditorium Shores, McKinney Falls, Pace Bend",
          category: ""
        },
        {
          card_name: "Celeb Stalker",
          item: "Lance Armstrong, Willie Nelson, Robert Rodriguez, Elijah Wood, Sandra Bullock, Matthew McConaughey, Mike Judge, Andy Roddick",
            category: ""
        },
        {
          card_name: "Arts",
          item: "Blanton Museum of Art, Mexic-Arte Museum, Harry Ransom Center, Elisabet Ney Museum, Umlauf Sculpture Garden, LBJ Library, Bob Bullock Museum, The Contemporary Austin",
          category: ""
        },
        {
          card_name: "Java",
          item: "Strange Brew, Cenote, Bouldin Creek Café, Cherrywood Coffeehouse, Summermoon, Mozart's Coffee, Epoch Coffee, Cuvée Coffee",
          category: ""
        },
        {
          card_name: "Vinyl",
          item: "Waterloo Records, Friends of Sound, End of an Ear, Breakaway Records, Antone's Record Shop, Encore Records, The Sound Gallery, Exploded Records",
          category: ""
        },
        {
          card_name: "Daytripper",
          item: "Gruene Hall, Canyon Lake, Krause Springs, Smitty's Market, Enchanted Rock, Schlitterbahn, Hamilton Pool, San Antonio Riverwalk",
          category: ""
        }
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
