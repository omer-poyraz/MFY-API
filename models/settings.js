const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Settings = sequelize.define('Settings', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    defaultValue: 1
  },
  title: {
    type: DataTypes.JSON,
    allowNull: false
  },
  description: {
    type: DataTypes.JSON,
    allowNull: true
  },
  copyright: {
    type: DataTypes.JSON,
    allowNull: true
  },
  address: {
    type: DataTypes.JSON,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: true
  },
  working: {
    type: DataTypes.JSON,
    allowNull: true
  },
  map: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'Settings', // Büyük S ile tablo adı
  timestamps: false
});

module.exports = Settings;
