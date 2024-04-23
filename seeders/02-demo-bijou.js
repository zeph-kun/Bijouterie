'use strict';
const faker = require('faker');

faker.locale = 'fr';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const fakeBijou = [];
    for (let i = 0; i < 30; i++) {
      fakeBijou.push({
        description: faker.commerce.productName(),
        prixVente: faker.commerce.price(),
        prixLocation: faker.commerce.price(),
        idCategorie: Math.floor(Math.random() * 25) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Bijous', fakeBijou);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bijous', null, {});
  }
};
