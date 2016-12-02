'use strict';

var models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.Gamecards.bulkCreate(
      [
        {
          card_name: "Austin Eats",
          item: "The Highball,Mueller Food Trucks,Ego’s,Hipster Eating a Taco,Peddle Bar,Bar Patio Food Truck,Amy’s Ice Cream,Whole Foods Lamar",
          category: "Food & Drink"
        },
        {
          card_name: "We're all a little weird",
          item: "Bum Fighting,Esther’s Follies,Chicken Shit Bingo, Hippie Hollow,Leslie Cochran Statue,Cathedral of Junk, Museum Of The Weird,Street Dancing Guy",
          category: "Weird"
        },
        {
          card_name: "Selfie Spots",
          item: "The Capital,Castle Hill Graffiti,Stevie Ray Statue, Zilker Park,I Love You So Much,Hi How Are You,Barton Springs Pool,UT Tower",
          category: "Sights & Sounds"
        },
        {
          card_name: "Play Time",
          item: "Paddle Boarder,Sixth Street,Congress Ave Bridge, Hamilton Pool,Austin Panic Room,Peter Pan Mini Golf,Mount Bonnellfies,Blue Cat Cafe",
          category: "Praks & Rec"
        },
        {
          card_name: "Swimming Holes",
          item: "Deep Eddy,Hippie Hollow,Twin Falls,Sculpture Falls, Honey Hole,Gus Fruh,Lost Creek,Secret Beach",
          category: "Parks & Rec"
        },
        {
          card_name: "Brew Crawl",
          item: "Austin Beerworks,Adelbert's,512 Brewing Co,Hops and Grain,Jester King,Independence Brewing Co,Live Oak,Zilker Brewing Co",
          category: "Food & Drink"
        },
        {
          card_name: "Get your green on",
          item: "Lady Bird Lake,Zilker,Commons Ford,Mary Moore Searight,Pease Park,Auditorium Shores,McKinney Falls,Pace Bend",
          category: "Parks & Rec"
        },
        // ---------- To Add During Demo -----------------
        // {
        //   card_name: "Celeb Stalker",
        //   item: "Lance Armstrong, Willie Nelson, Robert Rodriguez, Elijah Wood, Sandra Bullock, Matthew McConaughey, Mike Judge, Andy Roddick",
        //     category: "Weird"
        // },
        {
          card_name: "For your inner artist",
          item: "Blanton Museum of Art,Mexic-Arte Museum,Harry Ransom Center,Elisabet Ney Museum,Umlauf Sculpture Garden,LBJ Library,Bob Bullock Museum,The Contemporary Austin",
          category: "Sights & Sounds"
        },
        {
          card_name: "coffee coffee coffee",
          item: "Strange Brew,Cenote,Bouldin Creek Café,Cherrywood Coffeehouse,Summermoon,Mozart's Coffee,Epoch Coffee,Cuvée Coffee",
          category: "Food & Drink"
        },
        {
          card_name: "Vinyl",
          item: "Waterloo Records,Friends of Sound,End of an Ear, Breakaway Records,Antone's Record Shop,Encore Records,The Sound Gallery,Exploded Records",
          category: "Sights & Sounds"
        },
        {
          card_name: "Daytripper",
          item: "Gruene Hall,Canyon Lake,Krause Springs,Smitty's Market,Enchanted Rock,Schlitterbahn,Hamilton Pool,San Antonio Riverwalk",
          category: "Parks & Rec"
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return models.Gamecards.destroy(
      {where:
        {category: [
        "Parks & Rec",
        "Sights & Sounds",
        "Food & Drink",
        "Weird"
        ]},
      }
    )
  }
};
