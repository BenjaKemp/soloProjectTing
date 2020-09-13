const {
    gql
} = require('apollo-server-express');

module.exports = gql `
  extend type Query {
    getPlayers: [Player!]
    getPlayer(id: ID!): Player
  }
  extend type Mutation {
    createPlayer(input: CreatePlayerInput): Player!
    updatePlayer(input: UpdatePlayerInput) : Player!
    deletePlayer(id: ID!): DeletePlayerPayload!
  }
  type Player {
    id: ID!
    playername: String!
  }
  input CreatePlayerInput {
    playername: String!
  }
  input UpdatePlayerInput {
    id: ID!
    playername: String
  }
  type DeletePlayerPayload {
    id: ID!
    confirmation: String!
  }

`
