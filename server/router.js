const Authentication = require('./controllers/authentication');
const passport = require('./services/passport')

module.exports = (app) => {
  app.post('/signin', Authentication.signin);
  app.post('/signup', Authentication.signup);
  // app.use('/graphql/', passport.requireAuth);
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
}