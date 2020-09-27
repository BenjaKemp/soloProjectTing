const {
  gql
} = require('apollo-server-express');

const {
  userSchema,
  userResolver
} = require('./User');
const {
  messageSchema,
  messageResolver
} = require('./Blog');
const {
  playerSchema,
  playerResolver
} = require('./Player');

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
const schema = [linkSchema, userSchema, messageSchema, playerSchema];
const resolvers = [userResolver, messageResolver, playerResolver];

module.exports = {
  schema,
  resolvers
}