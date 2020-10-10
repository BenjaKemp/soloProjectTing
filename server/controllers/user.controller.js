const User = require("../database/models/user.model");
const jwt = require("jwt-simple");
const config = require("../config");

const tokenForUser = user => {
  const timestamp = new Date().getTime();
    return jwt.encode({
      sub: user._id,
      iat: timestamp
    }, config.secret);
};

class UserClass {
    // `fullName` becomes a virtual
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(v) {
    const firstSpace = v.indexOf(' ');
    this.firstName = v.split(' ')[0];
    this.lastName = firstSpace === -1 ? '' : v.substr(firstSpace + 1);
  }
    // `getFullName()` becomes a document method
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
    // `findByFullName()` becomes a static
  findByFullName(name) {
    const firstSpace = name.indexOf(' ');
    const firstName = name.split(' ')[0];
    const lastName = firstSpace === -1 ? '' : name.substr(firstSpace + 1);
    return this.findOne({
      firstName,
      lastName
    });
  }
  static signin = async ({ body: { password, username } }, res, next) => {
      if (!username || !password) {
          return res.status(422)
                    .send({
                        error: "you must provide both a username and password "
                    });
      }
      User.findOne({ username }, function (err, user) {
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
    static signup = ({ body: { firstName, lastName, email, password, username } }, res, next) => {
        if (!username || !password) {
            return res
                  .status(422)
                  .send({
                      error: "you must provide both a username and password "
                  });
        }
        User.findOne({ email: email }, (err, existingUser) => {
            if (err) {
                return next(err);
            }
            if (existingUser) {
                return res.status(422).send({
                    error: "email already exists!"
                });
            }
            const user = new User({ email, password, firstName, lastName, username });
            user.save(err => {
                if (err) {
                    return next(err);
                }
                console.log('you have added user ', user)
                res.json({
                    _id: user._id,
                    token: tokenForUser(user),
                    username: user.username

                });
            });
        });
    };
}
User.schema.loadClass(UserClass)
module.exports = User