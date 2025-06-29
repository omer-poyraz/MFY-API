const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SocialMedia = sequelize.define('SocialMedia', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  file: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'social_media',
  timestamps: false
});

module.exports = SocialMedia;
