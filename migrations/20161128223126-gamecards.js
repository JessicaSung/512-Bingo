'use strict';

var models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.Gamecards.bulkCreate(
      [
        {
          card_name: "Austin Eats",
          item: "The Highball,Mueller Food Trucks,Ego’s,Hipster Eating a Taco,Peddle Bar,Franklin BBQ,Amy’s Ice Cream,Whole Foods Lamar",
          category: "Food & Drink",
          locations: "30.256206 -97.7653559,30.2965756 -97.7096126,0,0,30.2701466 -97.7334599,0,30.2705728 -97.7554881"
        },
        {
          card_name: "We're all a little weird",
          item: "Bum Fighting,Esther’s Follies,Chicken Shit Bingo, Hippie Hollow,Leslie Cochran Statue,Cathe-dral of Junk, Museum Of The Weird,Street Dancing Guy",
          category: "Weird",
          locations: "0,30.2662946 -97.7396917,30.3844914 -97.747007,30.41316 -97.8862543,0,30.2186476 -97.7737523,30.2670632 -97.7409236,0"
        },
        {
          card_name: "Selfie Spots",
          item: "The Capital,Castle Hill Graffiti,Stevie Ray Statue, Zilker Park,I Love You So Much,Hi How Are You,Barton Springs Pool,UT Tower",
          category: "Around Town",
          locations: "30.2746698 -97.7425392,30.2775496 -97.7555656,30.2631141 -97.7528614,0,30.2511192 -97.7515465,30.2838288 -97.7425514,30.2636401 -97.7728872,30.2862222 -97.7415767"
        },
        {
          card_name: "Play Time",
          item: "Paddle Boarder,Sixth Street,Congress Ave Bridge, Hamilton Pool,Austin Panic Room,Peter Pan Mini Golf,Mount Bonnell,Blue Cat Cafe",
          category: "Parks & Rec",
          locations: "0,0,30.2621484 -97.7472451,30.3422856 -98.1292593,30.2761732 -97.7491829,30.2602831 -97.7599322,30.3207662 -97.7755289,30.2588126 -97.7327257"
        },
        {
          card_name: "Swimming Holes",
          item: "Deep Eddy,Hippie Hollow,Twin Falls,Sculp-ture Falls, Honey Hole,Gus Fruh,Lost Creek,Secret Beach",
          category: "Parks & Rec",
          locations: "30.2765196 -97.7753945,30.41316 -97.8862543,30.2489562 -97.8151161,30.2618591 -97.8257103,0,30.2492831 -97.7975463,30.2739688 -97.8449409,0"
        },
        {
          card_name: "Brew Crawl",
          item: "Austin Beer-works,Blue Owl,512 Brewing Co,Hops and Grain,Jester King,Indepen-dence Brewing,Live Oak,Zilker Brewing Co",
          category: "Food & Drink",
          locations:"30.3797754 -97.7323244,30.2545683 -97.7191265,30.2229907 -97.7723041,30.2582666 -97.7147767,30.2307093 -98.0014291,30.2111898 -97.7382625,30.2209128 -97.6632579,30.2620521 -97.7267507"
        },
        {
          card_name: "going green",
          item: "Lady Bird Lake,Zilker,Commons Ford,Mary Moore Searight,Pease Park,Audi-torium Shores,McKinney Falls,Pace Bend",
          category: "Parks & Rec",
          locations: "0,0,0,30.1587397 -97.8104331,30.2844604 -97.7562618,30.2627213 -97.753719,30.1803628 -97.7239284,0"
        },
        // ---------- To Add During Demo -----------------
        // {
        //   card_name: "Celeb Stalker",
        //   item: "Lance Armstrong, Willie Nelson, Robert Rodriguez, Elijah Wood, Sandra Bullock, Matthew McConaughey, Mike Judge, Andy Roddick",
        //     category: "Weird"
        // },
        {
          card_name: "Feed your inner artist",
          item: "Blanton Museum of Art,Mexic-Arte Museum,Harry Ransom Center,Elisabet Ney Museum,Umlauf Sculp-ture Garden,LBJ Library,Bob Bullock Museum,The Contem-porary",
          category: "Around Town",
          locations: "30.2810244 -97.7396508,30.2669 -97.745243,30.2843369 -97.7434105,30.3066536 -97.7284302,30.2631194 -97.7688083,30.285781 -97.7313478,30.2803694 -97.7413623,30.2692848 -97.7450246"
        },
        {
          card_name: "coffee coffee coffee",
          item: "Strange Brew,Cenote,Bouldin Creek Café,Cherry-wood Coffee,Summer Moon,Mozart's Coffee,Epoch Coffee,Cuvée Coffee",
          category: "Food & Drink",
          locations: "30.2179326 -97.7986739,30.2604678 -97.7358858,30.2464974 -97.7589791,30.293538 -97.7182021,30.2332681 -97.7670598,30.295355 -97.7864528,30.2954892 -97.8543047,30.2615126 -97.7231529"
        },
        {
          card_name: "Vinyl",
          item: "Water-loo Records,Friends of Sound,End of an Ear, Break-away Records,Antone's Record Shop,Encore Records,The Sound Gallery,Exploded Records",
          category: "Around Town",
          locations: "30.2719688 -97.7564485,30.2470232 -97.7532445,30.2290433 -97.7865262,30.3183149 -97.7266304,30.2962652 -97.7449199,30.2653384 -97.735986,30.2125724 -97.7731544,0"
        },
        {
          card_name: "Daytripper",
          item: "Gruene Hall,Canyon Lake,Krause Springs,Smitty's Market,En-chanted Rock,Schlit-terbahn,Hamilton Pool,San Antonio River walk",
          category: "Parks & Rec",
          locations: "29.7383743 -98.1065446,0,30.4794165 -98.1475829,29.8836307 -97.6731167,0,29.7103397 -98.1289547,30.3422856 -98.1292593,0"
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return models.Gamecards.destroy(
      {where:
        {category: [
        "Parks & Rec",
        "Around Town",
        "Food & Drink",
        "Weird"
        ]},
      }
    )
  }
};
