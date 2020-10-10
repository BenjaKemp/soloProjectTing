const passport = require("passport");
const User = require("../database/models/user.model");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// create local strategy
// const localOptions = {usernameField: 'username'};
const localLogin = new LocalStrategy((username, password, done) => {
    User.findOne({
        username: username
    }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return done(err);
            }
            if (!isMatch) {
                return done(null, false, {
                    message: "no match found"
                });
            }
            return done(null, user);
        });
    });
});
// set up options for jwt
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: config.secret
};
// create jwt Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

    console.log('this is payload     ', payload)
    // see if the user ID in the payload exists in our database
    // if it does, call done with that other
    // otherwise, call done without a user object
    User.findById(payload.sub, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

const requireAuth = passport.authenticate('jwt', {
    session: false
});
const requireSignin = passport.authenticate('local', {
    session: false
});


passport.use(jwtLogin);

module.exports = {
    requireAuth,
    requireSignin,
    localLogin
}
// passport.use(localLogin);

// tell passport to user this strategy