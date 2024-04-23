const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Location extends Model {
        static associate(models) {
            Location.belongsTo(models.Client, {
                foreignKey: 'idClient'
            });
            Location.belongsTo(models.Bijou, {
                foreignKey: 'idBijou'
            });
        }
    }
    Location.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateDebut: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dateFin: {
            type: DataTypes.DATE,
            allowNull: false
        },
        idClient: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : {
                model: 'Clients',
                key: 'id'
            }
        },
        idBijou: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : {
                model: 'Bijous',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Location'
    });
    return Location;
};
