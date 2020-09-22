const User = require("../database/models/userModel");
const jwt = require("jwt-simple");
const config = require("../config");

const tokenForUser = user => {
  const timestamp = new Date().getTime();

  return jwt.encode({
    sub: user._id,
    iat: timestamp
  }, config.secret);
};

exports.signin = async ({
  body: {
    password,
    username
  }
}, res, next) => {
  if (!username || !password) {
    return res
      .status(422)
      .send({
        error: "you must provide both a username and password "
      });
  }

  User.findOne({
    username
  }, function (err, user) {
    if (err) throw err;
    user.comparePassword(password, function (err, isMatch) {
      if (err) throw err;
      console.log('Password123:', isMatch); // -&gt; Password123: true
      console.log('this is the user  ', user); // -&gt; Password123: true
      res.send({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        token: tokenForUser(user)
      });
    });
  })
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