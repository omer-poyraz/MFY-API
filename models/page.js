const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Page = sequelize.define('Page', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.JSON, allowNull: false },
  slug: { type: DataTypes.JSON, allowNull: false },
  description: { type: DataTypes.JSON, allowNull: true },
  content: { type: DataTypes.JSON, allowNull: true },
  specialField1: { type: DataTypes.JSON, allowNull: true },
  specialField2: { type: DataTypes.JSON, allowNull: true },
  specialField3: { type: DataTypes.JSON, allowNull: true },
  specialField4: { type: DataTypes.JSON, allowNull: true },
  specialField5: { type: DataTypes.JSON, allowNull: true },
  meta: { type: DataTypes.JSON, allowNull: true }
}, {
  tableName: 'Pages',
  timestamps: true
});

module.exports = Page;
