'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Categoria de prueba',
          description: 'Generada con sequelize-cli',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {}
};
