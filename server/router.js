const Authentication = require('./controllers/authentication');
const passport = require('./services/passport')

const path = require('path')

module.exports = (app) => {
  app.use('*', passport.requireAuth);
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
  app.post('/signin', Authentication.signin);
  app.post('/signup', Authentication.signup);
}