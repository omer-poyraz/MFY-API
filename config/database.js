const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mfy', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports = sequelize;
