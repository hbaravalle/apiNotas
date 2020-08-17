module.exports = function(sequelize, dataTypes) {
    let alias = "Note";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        text: {
            type: dataTypes.TEXT,
            allowNull: false
        }
    }
    let config = {
        timestamps: true
    }

    let Note = sequelize.define(alias, cols, config);
    return Note;
}