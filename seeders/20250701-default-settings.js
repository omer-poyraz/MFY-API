'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Settings', [{
      id: 1,
      title: JSON.stringify({ tr: 'Başlık', en: 'Title' }),
      description: JSON.stringify({ tr: 'Açıklama', en: 'Description' }),
      copyright: JSON.stringify({ tr: 'Telif Hakkı', en: 'Copyright' }),
      address: JSON.stringify({ tr: 'Adres', en: 'Address' }),
      phone: '1234567890',
      mail: 'example@example.com',
      working: JSON.stringify({ tr: 'Çalışma Saatleri', en: 'Working Hours' }),
      map: JSON.stringify({ tr: 'Harita', en: 'Map' }),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Settings', { id: 1 });
  }
};
