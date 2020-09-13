const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }
  extend type Mutation {
    createUser(input: CreateUserInput): User!
    updateUser(input: UpdateUserInput) : User!
    deleteUser(id: ID!): DeleteUserPayload!
  }
  type User {
    id: ID!
    username: String!
    messages: [Message!]
  }
  input CreateUserInput {
    name: String!
    password: String!
  }
  input UpdateUserInput {
    id: ID!
    username: String
    whatever: String
  }
  type DeleteUserPayload {
    id: ID!
    confirmation: String!
  }

`
