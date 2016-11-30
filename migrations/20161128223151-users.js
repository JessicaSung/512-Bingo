'use strict';

var models = require('../models');

// Bob's password is 1234

module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.Users.bulkCreate(
      [
        {user_name: "bob@test.com", password: "sha1$10794702$1$ab4b77ea04b8e3110bdab82eb1b747e5e2f61c90", active_card: 1, items_found: "3,5,7", badge_level: 1}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return models.Users.destroy(
      {where:
        {user_name: "Bob"},
      }
    )
  }
};
