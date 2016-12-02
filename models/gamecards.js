'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gamecards = sequelize.define('Gamecards', {
    card_name: DataTypes.STRING,
    item: DataTypes.STRING,
    category: DataTypes.STRING,
    locations: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Gamecards.belongsToMany(models.Users, {through: 'GamecardsUsers'})
      }
    }
  });
  return Gamecards;
};
