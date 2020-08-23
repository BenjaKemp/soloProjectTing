const { gql } = require('apollo-server-express')
const _ = require('lodash')
const {mergeSchemas} = require('graphql-tools')

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
// const otherSchema = _.extend(userSchema, messageSchema, linkSchema)
const schema = [linkSchema, userSchema, messageSchema]
const resolvers = [userResolver, messageResolver]



module.exports = { schema, resolvers }