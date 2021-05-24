'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    static associate(models) {
      models.review.belongsTo(models.game)
    }
  };
  review.init({
    reviewBody: DataTypes.TEXT,
    score: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};