const express = require('express');
const mongoose = require('mongoose');
const {
  ApolloServer, gql
} =require('apollo-server-express');
const cors = require('cors')

const { schema, resolvers } =require( './src');

const app = express();
app.use(cors())

const models = require('./database')

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
    mongoose.connect('mongodb://localhost:27017/graphql')
    console.log('Apollo Server on http://localhost:8000/graphql');
});