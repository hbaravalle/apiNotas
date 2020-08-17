const db = require('../database/models');

module.exports = {
    create: (req, res) => {
        db.Note.create({
            user_id: req.user.id,
            title: req.body.title,
            text: req.body.text
        })
        .then(function(result) {
            return res.status(201).json(result);
        })
        .catch(function(error) {
            res.json(error)
        })
    },
    userNotes: (req, res) => {
        db.Note.findAll({
            where: {
                user_id: req.user.id
            }
        })
        .then(function(result) {
            return res.status(200).json(result);
        })
        .catch(function(error) {
            return res.status(404).json(error);
        })
    },
    delete: (req, res) => {
        db.Notes.delete({
            where: {
                id: req.body.id
            }
        })
    },
    edit: () => {
        
    }
}