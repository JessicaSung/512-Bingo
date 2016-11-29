'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    active_card: DataTypes.INTEGER,
    items_found: DataTypes.STRING,
    badge_level: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Users.belongsToMany(models.Gamecards, {through: 'GamecardsUsers'})
      }
    }
  });
  return Users;
};