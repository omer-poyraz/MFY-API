const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Menu = sequelize.define('Menu', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.JSONB,
    allowNull: false
  },
  file: {
    type: DataTypes.STRING,
    allowNull: true
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  parentId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'Menu',
      key: 'id'
    }
  }
}, {
  tableName: 'Menu',
  timestamps: false
});

Menu.hasMany(Menu, { as: 'children', foreignKey: 'parentId' });
Menu.belongsTo(Menu, { as: 'parent', foreignKey: 'parentId' });

module.exports = Menu;
