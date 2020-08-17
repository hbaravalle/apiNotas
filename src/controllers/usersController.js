const db = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    create: (req, res) => {
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        })
        .then(function(result) {
            return res.status(201).json(result)
        })
        .catch(function(error) {
            res.status(404).json(error)
        })
    },
    login: async (req, res) => {

        // let user = await db.User.findOne({
        //     where: {
        //         email: req.body.email
        //     }
        // })
        // .then(usuario => res.json(usuario))

        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(usuario) {
            if(bcrypt.compareSync(req.body.password, usuario.password)) {

                // EL USUARIO ESTÁ GENIAL
                const payload = {
                    user: { id: usuario.id, email: usuario.email }
                }
                jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 6000 * 60 * 24 * 7}, function(error, token) {
                    if(error) {
                        res.json(error)
                    } else {
                        res.cookie('apiNotitas', {token}, {maxAge: 6000 * 60 * 24 * 7})
                        return res.status(200).json('OK');
                    }
                })

            } else {
                return res.status(401)
            }
        })
    }
}