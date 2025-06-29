const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Page = require('./page');

const Showcase = sequelize.define('Showcase', {
  title: { type: DataTypes.JSON, allowNull: false },
  description: { type: DataTypes.JSON, allowNull: true },
  content: { type: DataTypes.JSON, allowNull: true },
  file: { type: DataTypes.STRING, allowNull: true },
  order: { type: DataTypes.INTEGER, allowNull: true },
  companyId: { type: DataTypes.INTEGER, allowNull: false }
});

Showcase.belongsTo(Page, { foreignKey: 'pageId', as: 'page' });
Page.hasMany(Showcase, { foreignKey: 'pageId', as: 'showcases' });

module.exports = Showcase;
