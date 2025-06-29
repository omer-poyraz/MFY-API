const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Company = sequelize.define('Company', {
  title: { type: DataTypes.JSON, allowNull: false },
  description: { type: DataTypes.JSON, allowNull: true },
  content: { type: DataTypes.JSON, allowNull: true },
  file: { type: DataTypes.STRING, allowNull: true }
}, {
  tableName: 'Companies'
});

module.exports = Company;
