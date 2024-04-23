'use strict';
const faker = require('faker');

faker.locale = 'fr';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const fakeCategorie = [];
    for (let i = 0; i < 30; i++) {
      fakeCategorie.push({
        name: faker.commerce.department(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Categories', fakeCategorie);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
