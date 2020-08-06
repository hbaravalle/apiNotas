module.exports = function(sequelize, dataTypes) {
    let alias = "Note";
    let cols = {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: Sequelize.DataTypes.STRING(50),
            allowNull: false
        },
        text: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        }
    }
    let config = {
        timestamps: true
    }

    let Note = sequelize.define(alias, cols, config);
    return Note;
}