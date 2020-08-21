const express = require('express');
const {
  ApolloServer, gql
} =require('apollo-server-express');
const cors = require('cors')

const { schema, resolvers } =require( './src');

const app = express();
app.use(cors())

const models = require('./database')


console.log('schema       ',schema)
console.log('resolvers       ',resolvers)


const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
      models,
      me: models.users[1],
    },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(8000, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});