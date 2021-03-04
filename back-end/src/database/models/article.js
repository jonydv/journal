'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {

    static associate(models) {
      Article.belongsTo(models.Category, {foreignKey: 'categoryId'});
    }
  };
  Article.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
    paranoid: true
  });
  return Article;
};