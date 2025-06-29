'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      username: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING, allowNull: false },
      firstName: { type: Sequelize.STRING, allowNull: true },
      lastName: { type: Sequelize.STRING, allowNull: true },
      file: { type: Sequelize.STRING, allowNull: true },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
    await queryInterface.createTable('Blogs', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      title: { type: Sequelize.JSON, allowNull: false },
      description: { type: Sequelize.JSON, allowNull: true },
      content: { type: Sequelize.JSON, allowNull: true },
      file: { type: Sequelize.STRING, allowNull: true },
      order: { type: Sequelize.INTEGER, allowNull: true },
      userId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE' },
      meta: { type: Sequelize.JSON, allowNull: true },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
    await queryInterface.createTable('Companies', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      title: { type: Sequelize.JSON, allowNull: false },
      description: { type: Sequelize.JSON, allowNull: true },
      content: { type: Sequelize.JSON, allowNull: true },
      file: { type: Sequelize.STRING, allowNull: true },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
    await queryInterface.createTable('Settings', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      title: { type: Sequelize.JSON, allowNull: false },
      description: { type: Sequelize.JSON, allowNull: true },
      copyright: { type: Sequelize.JSON, allowNull: true },
      address: { type: Sequelize.JSON, allowNull: true },
      phone: { type: Sequelize.STRING, allowNull: true },
      mail: { type: Sequelize.STRING, allowNull: true },
      working: { type: Sequelize.JSON, allowNull: true },
      map: { type: Sequelize.JSON, allowNull: true },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
    await queryInterface.createTable('Pages', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      title: { type: Sequelize.JSON, allowNull: false },
      slug: { type: Sequelize.JSON, allowNull: false },
      description: { type: Sequelize.JSON, allowNull: true },
      content: { type: Sequelize.JSON, allowNull: true },
      specialField1: { type: Sequelize.JSON, allowNull: true },
      specialField2: { type: Sequelize.JSON, allowNull: true },
      specialField3: { type: Sequelize.JSON, allowNull: true },
      specialField4: { type: Sequelize.JSON, allowNull: true },
      specialField5: { type: Sequelize.JSON, allowNull: true },
      meta: { type: Sequelize.JSON, allowNull: true },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
    await queryInterface.createTable('Showcases', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      title: { type: Sequelize.JSON, allowNull: false },
      description: { type: Sequelize.JSON, allowNull: true },
      content: { type: Sequelize.JSON, allowNull: true },
      order: { type: Sequelize.INTEGER, allowNull: true },
      file: { type: Sequelize.STRING, allowNull: true },
      companyId: { type: Sequelize.INTEGER, allowNull: true, references: { model: 'Companies', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE' },
      pageId: { type: Sequelize.INTEGER, allowNull: true, references: { model: 'Pages', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'SET NULL' },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
    await queryInterface.createTable('Forms', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING, allowNull: false },
      mail: { type: Sequelize.STRING, allowNull: false },
      phone: { type: Sequelize.STRING, allowNull: true },
      company: { type: Sequelize.STRING, allowNull: true },
      subject: { type: Sequelize.STRING, allowNull: false },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Forms');
    await queryInterface.dropTable('Showcases');
    await queryInterface.dropTable('Pages');
    await queryInterface.dropTable('Settings');
    await queryInterface.dropTable('Companies');
    await queryInterface.dropTable('Blogs');
    await queryInterface.dropTable('Users');
  }
};
