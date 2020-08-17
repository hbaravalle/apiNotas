const jwt = require('jsonwebtoken');

function userHasToken(req, res, next) {
    if(req.cookies.apiNotitas) {
        try {
            const decoded = jwt.verify(req.cookies.apiNotitas.token, process.env.JWT_SECRET);
            req.user = decoded.user;
            next();
        } catch(error) {
            res.send("Token inválido!")
        }
    } else {
        return res.status(401).json()
    }
}

module.exports = userHasToken;