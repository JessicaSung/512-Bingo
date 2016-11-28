'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.Gamecards.bulkCreate(
      [
        {card_name: "Food", item: "[The Highball, Mueller Food Trucks, Ego’s, Hipster Eating a Taco, Peddle bar, Bar with a food truck in it, Amy’s Ice Cream, Whole Foods Lamar]", category: "Food"},
        {card_name: "Weird", item: "[Someone fighting with a homeless person, Esther’s Follies, Chicken Shit Bingo, Hippie Hollow, Leslie Cochran statue, Cathedral of Junk, Museum Of The Weird, Guy dancing on a street corner]", category: "Weird"},
        {card_name: "Landmark", item: "[The Capital, Graffiti on Castle Hill, Stevie Ray Vaughan Statue, Zilker Park, I Love You So Much mural, Hi How Are You mural, Barton Springs Pool, UT Tower]", category: "Landmark"},
        {card_name: "Activity", item: "[Someone paddle boarding, Sixth Street, Congress Ave Bridge At Dusk, Hamilton Pool, Austin Panic Room, Peter Pan Mini-Golf, Someone taking a selfie on Mount Bonnell, Blue Cat Cafe]", category: "Activity"},
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return models.Gamecards.destroy(
      {where:
        {card_name: [
        "Food",
        "Weird",
        "Landmark",
        "Activity"
        ]},
        {item: [
        "[The Highball, Mueller Food Trucks, Ego’s, Hipster Eating a Taco, Peddle bar, Bar with a food truck in it, Amy’s Ice Cream, Whole Foods Lamar]",
        "[Someone fighting with a homeless person, Esther’s Follies, Chicken Shit Bingo, Hippie Hollow, Leslie Cochran statue, Cathedral of Junk, Museum Of The Weird, Guy dancing on a street corner]",
        "[The Capital, Graffiti on Castle Hill, Stevie Ray Vaughan Statue, Zilker Park, I Love You So Much mural, Hi How Are You mural, Barton Springs Pool, UT Tower]",
        "[Someone paddle boarding, Sixth Street, Congress Ave Bridge At Dusk, Hamilton Pool, Austin Panic Room, Peter Pan Mini-Golf, Someone taking a selfie on Mount Bonnell, Blue Cat Cafe]"
        ]},
        {category: [
        "Food",
        "Weird",
        "Landmark",
        "Activity"
        ]}
      }
    )
  }
};