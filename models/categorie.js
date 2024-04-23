const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Categorie extends Model {
        static associate(models) {
            Categorie.hasMany(models.Bijou, {
                foreignKey: 'idCategorie'
            });
        }
    }
    Categorie.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Categorie'
    });
    return Categorie;
};
