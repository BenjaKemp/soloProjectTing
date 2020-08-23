const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    messages: [Message!] !
    message(id: ID!): Message!
  }
  extend type Mutation {
    createMessage(input: CreateMessageInput!): CreateMessagePayload!
    updateMessage(input: UpdateMessageInput): Message!
    deleteMessage(id: ID!): DeleteMessagePayload!
  }
  type Message {
    id: ID!
    text: String!
    user: User!
  }
  input CreateMessageInput {
    text: String!,
    tags: [String],
    author: ID!,
    title: String
  }
  type CreateMessagePayload {
    messageId: ID
  }
  input UpdateMessageInput {
    id: ID!
    username: String
    whatever: String
  }
  type DeleteMessagePayload {
    id: ID!
    confirmation: String!
  }
`
