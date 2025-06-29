'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', [{
      id: 1,
      title: JSON.stringify({ tr: '', en: '' }),
      description: JSON.stringify({ tr: '', en: '' }),
      content: JSON.stringify({ tr: '', en: '' }),
      file: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', { id: 1 });
  }
};
