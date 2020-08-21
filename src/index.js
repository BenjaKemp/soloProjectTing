const { gql } = require('apollo-server-express')
const _ = require('lodash')

const {
    userSchema,
    userResolver
} = require('./user');
const { 
    messageSchema,
    messageResolver
} = require( './message');

const linkSchema = gql `
  type Query {
    _: Boolean
  }
 
  type Mutation {
    _: Boolean
  }
 
  type Subscription {
    _: Boolean
  }
`;
const schema = _.merge(linkSchema, userSchema, messageSchema)
const resolvers = _.merge(userResolver, messageResolver)



module.exports = { schema, resolvers }