const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  extend type Query {
    getPosts: [Message] 
    message(id: ID!): Message!
  }
  extend type Mutation {
    createMessage(input: CreateMessageInput!): CreateMessagePayload!
    updateMessage(input: UpdateMessageInput): Message!
    deleteMessage(id: ID!): DeleteMessagePayload!
  }
  type Message {
    text: String!,
    tags: [String],
    author: ID!,
    title: String,
    comments: [MessageComments],
  }
  type MessageComments {
    author: ID!
    body: String!
    meta: MessageMetaObject
  }
  type MessageMetaObject {
    votes: Int,
    favs: Int
  }
  input CreateMessageInput {
    text: String!,
    tags: [String],
    author: ID!,
    title: String,
    votes: Int,
    favs: Int
  }
  type CreateMessagePayload {
    messageId: ID
  }
  input UpdateMessageInput {
    author: ID!,
    text: String,
    tags: [String],
    title: String,
    votes: Int,
    favs: Int
  }
  type DeleteMessagePayload {
    id: ID!
    confirmation: String!
  }
`;