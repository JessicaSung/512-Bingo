'use strict';

var models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.Users.bulkCreate(
      [
        {user_name: "Bob", password: "Smith", active_card: 1, items_found: "[3, 5, 7]", badge_level: 1}
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
