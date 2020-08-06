module.exports = function(sequelize, DataTypes) {
    let alias = "User";
    let cols = {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.DataTypes.STRING(60),
            allowNull: false
        },
        email: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type:Sequelize.DataTypes.STRING(100),
            allowNull: false
        }
    }
    let config = {
        timestamps: true
    }

    let User = sequelize.define(alias, cols, config);
    return User
}