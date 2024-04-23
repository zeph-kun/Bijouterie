'use strict';
const faker = require('faker');

faker.locale = 'fr';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const clients = await queryInterface.sequelize.query(
      'SELECT id FROM Clients;',
      { type: Sequelize.QueryTypes.SELECT }
    );
    const bijous = await queryInterface.sequelize.query(
      'SELECT id FROM Bijous;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const clientIds = clients.map(c => c.id);
    const bijouIds = bijous.map(b => b.id);

    const fakeLocation = [];
    for (let i = 0; i < 30; i++) {
      fakeLocation.push({
        dateDebut: faker.date.past(),
        dateFin: faker.date.future(),
        idClient: faker.random.arrayElement(clientIds),
        idBijou: faker.random.arrayElement(bijouIds),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Locations', fakeLocation);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  }
};
