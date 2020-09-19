const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { schema, resolvers } = require('./graphql');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

// const config = require('../app/webpack.config.js');
// const compiler = webpack(config);
const app = express();
const router = require('./router');


app.use(cors())
app.use(morgan('combined'));
app.use(bodyParser.json({
  type: '*/*'
}));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
// }));

router(app);

const {
  models,
  mongoose
} = require('./database')

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me: {
      id: '1',
      firstname: 'Ben',
      lastname: 'Kemp',
      messageIds: [1]
    },
    mongoose

  },
});

server.applyMiddleware({
  app,
  path: '/graphql'
});

app.listen(8000, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});