'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Settings', [{
      id: 1,
      title: JSON.stringify({ tr: 'Başlık', en: 'Title' }),
      description: JSON.stringify({ tr: 'Açıklama', en: 'Description' }),
      copyright: JSON.stringify({ tr: 'Telif', en: 'Copyright' }),
      address: JSON.stringify({ tr: '', en: '' }),
      phone: '',
      mail: '',
      working: JSON.stringify({ tr: '', en: '' }),
      map: JSON.stringify({ tr: '', en: '' }),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Settings', null, {});
  }
};
