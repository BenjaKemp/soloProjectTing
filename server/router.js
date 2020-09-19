const Authentication = require('./controllers/authentication');
// const passportService = require('./services/passport')
const passport = require('passport');

const path = require('../app/dist/index.html')

const requireAuth = passport.authenticate('jwt', {
    session: false
});
const requireSignin = passport.authenticate('local', {
    session: false
});

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
     res.sendFile(path);
  })
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}