'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Articles',
      [
        {
          title: 'Titulo de prueba',
          subtitle: 'Subtitulo de prueba',
          content: 'Contenido de prueba',
          image: 'url imagen de prueba',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
