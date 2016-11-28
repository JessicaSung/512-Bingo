'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gamecards = sequelize.define('Gamecards', {
    card_name: DataTypes.STRING,
    item: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Gamecards;
};