const Authentication = require('./controllers/authentication');
// const passportService = require('./services/passport')
const passport = require('passport');

const path = require('path')
const index = path.join('../app/dist/', 'index.html');
const requireAuth = passport.authenticate('jwt', {
  session: false
});
const requireSignin = passport.authenticate('local', {
  session: false
});

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}