'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    authorId: { type: DataTypes.INTEGER, required: false, defaultValue: 0},
    title: { type: DataTypes.STRING, required: true, allowNull: false}, 
    article: { type: DataTypes.TEXT, required: true, allowNull: false},
    featured: { type: DataTypes.BOOLEAN, required: true, allowNull: false}, 
    published: { type: DataTypes.DATE, required: true}
  }, {
    classMethods: {
      associate: function(models) {
        models.Blog.belongsTo(models.Author, {as: 'authors', foreignKey: 'authorId', targetKey: 'id'});

      }
    }
  });
  return Blog;
};