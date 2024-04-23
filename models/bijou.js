const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Bijou extends Model {
        static associate(models) {
            Bijou.belongsTo(models.Categorie, {
                foreignKey: 'idCategorie'
            });
        }
    }
    Bijou.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prixVente: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        prixLocation: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        idCategorie: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Bijou'
    });
    return Bijou;
};
