const express = require('express');
const { ApolloServer } =require('apollo-server-express');
const cors = require('cors')
const { schema, resolvers } =require('./graphql');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
app.use(cors())
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

router(app);

const models = require('./database')

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
      models,
      me: {
        id: "1",
        firstname: "Ben",
        lastname: "Kemp",
        messageIds: [1]
      },
    },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(8000, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});