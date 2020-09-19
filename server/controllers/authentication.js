const User = require("../database/models/userModel");
const jwt = require("jwt-simple");
const config = require("../config");

const tokenForUser = user => {
    const timestamp = new Date().getTime();

    return jwt.encode({
        sub: user.id,
        iat: timestamp
    }, config.secret);
};

exports.signin = (req, res, next) => {

    console.log('we are here');
    res.send({
        token: tokenForUser(req.user)
    });

}

exports.signup = ({
    body: {
        firstName,
        lastName,
        email,
        password,
        username
    }
}, res, next) => {
    console.log('password    ', password)
    console.log('username    ', username)

    if (!username || !password) {
        return res
            .status(422)
            .send({
                error: "you must provide both a username and password "
            });
    }
    User.findOne({
        email: email
    }, (err, existingUser) => {
        if (err) {
            return next(err);
        }

        if (existingUser) {
            return res.status(422).send({
                error: "email already exists!"
            });
        }
        const user = new User({
            email,
            password,
            firstName,
            lastName,
            username
        });
        user.save(err => {
            if (err) {
                return next(err);
            }
            console.log('you have added user ', user)
            res.json({
                token: tokenForUser(user)
            });
        });
    });
};