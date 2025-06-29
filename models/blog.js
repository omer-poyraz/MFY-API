const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Blog = sequelize.define('Blog', {
  title: { type: DataTypes.JSON, allowNull: false },
  slug: { type: DataTypes.JSON, allowNull: false },
  description: { type: DataTypes.JSON, allowNull: true },
  content: { type: DataTypes.JSON, allowNull: true },
  file: { type: DataTypes.STRING, allowNull: true },
  order: { type: DataTypes.INTEGER, allowNull: true },
  process_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' } },
  meta: { type: DataTypes.JSON, allowNull: true }
});

Blog.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Blog;
