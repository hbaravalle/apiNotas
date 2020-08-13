const db = require('../database/models');

module.exports = {
    create: (req, res) => {
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password 
        })
        .then(function(result) {
            return res.status(201).json(result)
        })
        .catch(function(error) {
            res.status(404).json(error)
        })
    },
    login: function(req, res) {
        db.User.findAll({
            where: {
                email: req.body.email
            }
        })
        .then(function(result) {
            return res.send(result);
        })
        .catch(function(error) {
            return res.status(404).json(error)
        })
    }
}