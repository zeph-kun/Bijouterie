'use strict';
const faker = require('faker');

faker.locale = 'fr';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const fakeClient = [];
    for (let i = 0; i < 30; i++) {
      const prenom = faker.name.firstName();
      const nom = faker.name.lastName();
      const adresseRue = faker.address.streetAddress();
      const codePostal = faker.address.zipCode();
      const ville = faker.address.city();
      const courriel = faker.internet.email(prenom, nom);
      const telFixe = faker.phone.phoneNumber();
      const telPortable = faker.phone.phoneNumber();

      fakeClient.push({
        prenom: prenom,
        nom: nom,
        adresseRue: adresseRue,
        codePostal: codePostal,
        ville: ville,
        courriel: courriel,
        telFixe: telFixe,
        telPortable: telPortable,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Clients', fakeClient);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
