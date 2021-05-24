'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    static associate(models) {
      models.game.belongsTo(models.user)
    }
  };
  game.init({
    name: DataTypes.STRING,
    first_release_date: DataTypes.STRING,
    platforms: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};