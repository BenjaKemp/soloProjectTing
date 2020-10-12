const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }
  extend type Mutation {
    createUser(input: CreateUserInput): User!
    updateUser(input: UpdateUserInput) : User!
    deleteUser(id: ID!): DeleteUserPayload!
    newSearch(input: NewSearchInput!) : NewSearchPayload!
  }
  type User {
    id: ID!
    username: String!
    messages: [Post!]
  }
  input CreateUserInput {
    name: String!
    password: String!
  }
  input UpdateUserInput {
    id: ID!
    username: String
  }

  type NewSearchPayload {
    res: [NewSearchObject]
  }

  input NewSearchInput {
    employerId: ID 
    employerProfileId: ID
    keywords: [String]
    locationName: String
    distanceFromLocation: Int
    permanent: Boolean
    contract: Boolean
    temp: Boolean
    partTime: Boolean
    fullTime: Boolean
    minimumSalary: Int
    maximumSalary: Int
    postedByRecruitmentAgency: Boolean
    postedByDirectEmployer: Boolean
    graduate: Boolean
    resultsToTake: Int
    resultsToSkip: Int
  }

  type NewSearchObject {
    jobId: ID,
    employerId: ID,
    employerName: String,
    employerProfileId: ID,
    employerProfileName: String,
    jobTitle: String,
    locationName: String,
    minimumSalary: Int,
    maximumSalary: Int,
    currency: String,
    expirationDate: String,
    date: String,
    jobDescription: String,
    applications: Int
  }

  type DeleteUserPayload {
    id: ID!
    confirmation: String!
  }

`