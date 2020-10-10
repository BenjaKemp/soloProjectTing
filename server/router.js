const {
    schema: {
      statics
    }
} = require('./controllers/user.controller');
const passport = require('./services/passport')

module.exports = (app) => {
  app.post('/signin', statics.signin);
  app.post('/signup', statics.signup);
  // app.use('/graphql/', passport.requireAuth);
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
}