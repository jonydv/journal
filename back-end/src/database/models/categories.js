'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    
    static associate(models) {
      Category.hasMany(models.Article, {
        foreignKey: 'categoryId',
        sourceKey: 'id'
      })
    }
  };
  Category.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Category',
    paranoid: true
  });
  return Category;
};