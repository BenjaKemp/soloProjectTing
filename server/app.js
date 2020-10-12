const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { ApolloServer } = require('apollo-server-express');
const chatServer = require('./sockets')
const { schema, resolvers } = require('./graphql');
const { models, mongoose } = require('./database')
const router = require('./router');
const controllers = require('./controllers')
// const config = require('../app/webpack.config.js');
// const index = require('../app/dist/index.html');
// const compiler = webpack(config);
const app = express();
const http = require('http').Server(app)
chatServer.listen(http)
// const io = require('socket.io')(http);
app.use(cors())
app.use(morgan('combined'));
app.use(bodyParser.json({
  type: '*/*'
}));

// const Ben = new UserClass()

// const newMan = Ben.get("5f6249cf03565c154ca95186").then(el=> console.log('this is el  el', el))

// console.log('these are Ben    ',Ben)
// console.log('these are newMan    ',newMan)
// for(key in models.User){
//   console.log('these are keys    ',key)
// }
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    controllers,
    me: {
      id: '1',
      firstname: 'Ben',
      lastname: 'Kemp',
      messageIds: [1]
    },
    mongoose

  },
});

router(app);

server.applyMiddleware({
  app,
  path: '/graphql'
});

http.listen(8000, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
// }));
// console.log('hello     ',app)
module.exports = app;
