const UserClass = require('./controllers/user.controller');
const passport = require('./services/passport')

module.exports = (app) => {
  app.post('/login', UserClass.signin);
  app.post('/signup', UserClass.signup);
  // app.use('/graphql/', passport.requireAuth);
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
}