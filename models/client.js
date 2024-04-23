const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Client extends Model {
        static associate(models) {
            Client.hasMany(models.Location, {
                foreignKey: 'idClient'
            });
        }
    }
    Client.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adresseRue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codePostal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ville: {
            type: DataTypes.STRING,
            allowNull: false
        },
        courriel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telFixe: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telPortable: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Client'
    });
    return Client;
};
