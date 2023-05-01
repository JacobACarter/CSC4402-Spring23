const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        product_name: {type: DataTypes.STRING, allowNull: false},
        price: {type: DataTypes.INTEGER, allowNull: false},
        category: {type: DataTypes.STRING, allowNull: false},
        small_description: {type: DataTypes.STRING, allowNull: false},
        long_description: {type: DataTypes.STRING, allowNull: false},
        date_listed: {type: DataTypes.DATE, allowNull: false},
        picture_id: {type: DataTypes.INTEGER, allowNull: false},
        seller_id: {type: DataTypes.INTEGER, allowNull: false},
        stars_1: {type: DataTypes.INTEGER},
        stars_2: {type: DataTypes.INTEGER},
        stars_3: {type: DataTypes.INTEGER},
        stars_4: {type: DataTypes.INTEGER},
        stars_5: {type: DataTypes.INTEGER}
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Product', attributes, options);
}