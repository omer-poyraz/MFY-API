'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Create Users table
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      file: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Create Companies table
    await queryInterface.createTable('Companies', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.JSON,
        allowNull: false
      },
      description: {
        type: Sequelize.JSON,
        allowNull: true
      },
      content: {
        type: Sequelize.JSON,
        allowNull: true
      },
      file: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Create Settings table (no timestamps)
    await queryInterface.createTable('Settings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        defaultValue: 1
      },
      title: {
        type: Sequelize.JSON,
        allowNull: false
      },
      description: {
        type: Sequelize.JSON,
        allowNull: true
      },
      copyright: {
        type: Sequelize.JSON,
        allowNull: true
      },
      address: {
        type: Sequelize.JSON,
        allowNull: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mail: {
        type: Sequelize.STRING,
        allowNull: true
      },
      working: {
        type: Sequelize.JSON,
        allowNull: true
      },
      map: {
        type: Sequelize.JSON,
        allowNull: true
      }
    });

    // Create Blogs table
    await queryInterface.createTable('Blogs', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.JSON,
        allowNull: false
      },
      slug: {
        type: Sequelize.JSON,
        allowNull: false
      },
      description: {
        type: Sequelize.JSON,
        allowNull: true
      },
      content: {
        type: Sequelize.JSON,
        allowNull: true
      },
      file: {
        type: Sequelize.STRING,
        allowNull: true
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      process_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      meta: {
        type: Sequelize.JSON,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Create Forms table
    await queryInterface.createTable('Forms', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      company: {
        type: Sequelize.STRING,
        allowNull: true
      },
      subject: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Create Pages table
    await queryInterface.createTable('Pages', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.JSON,
        allowNull: false
      },
      slug: {
        type: Sequelize.JSON,
        allowNull: false
      },
      description: {
        type: Sequelize.JSON,
        allowNull: true
      },
      content: {
        type: Sequelize.JSON,
        allowNull: true
      },
      specialField1: {
        type: Sequelize.JSON,
        allowNull: true
      },
      specialField2: {
        type: Sequelize.JSON,
        allowNull: true
      },
      specialField3: {
        type: Sequelize.JSON,
        allowNull: true
      },
      specialField4: {
        type: Sequelize.JSON,
        allowNull: true
      },
      specialField5: {
        type: Sequelize.JSON,
        allowNull: true
      },
      meta: {
        type: Sequelize.JSON,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Create Showcases table
    await queryInterface.createTable('Showcases', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.JSON,
        allowNull: false
      },
      description: {
        type: Sequelize.JSON,
        allowNull: true
      },
      content: {
        type: Sequelize.JSON,
        allowNull: true
      },
      file: {
        type: Sequelize.STRING,
        allowNull: true
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pageId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Pages',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Create Menu table (no timestamps)
    await queryInterface.createTable('Menu', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      title: {
        type: Sequelize.JSONB,
        allowNull: false
      },
      file: {
        type: Sequelize.STRING,
        allowNull: true
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      parentId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Menu',
          key: 'id'
        }
      }
    });

    // Create social_media table (no timestamps)
    await queryInterface.createTable('social_media', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      file: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    // Drop tables in reverse order to respect foreign key constraints
    await queryInterface.dropTable('social_media');
    await queryInterface.dropTable('Menu');
    await queryInterface.dropTable('Showcases');
    await queryInterface.dropTable('Pages');
    await queryInterface.dropTable('Forms');
    await queryInterface.dropTable('Blogs');
    await queryInterface.dropTable('Settings');
    await queryInterface.dropTable('Companies');
    await queryInterface.dropTable('Users');
  }
};
