module.exports = function(sequelize, dataTypes) {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type:dataTypes.STRING(100),
            allowNull: false
        }
    }
    let config = {
        timestamps: true        
    }

    let User = sequelize.define(alias, cols, config);
    return User
}