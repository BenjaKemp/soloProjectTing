const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  extend type Query {
    getPosts: [Post] 
    message(id: ID!): Post!
  }
  extend type Mutation {
    createPost(input: CreatePostInput!): CreatePostPayload!
    updatePost(input: UpdatePostInput): Post!
    favePost(input: favePostInput): FavePostPayload!
    likeComment(input: likeCommentInput): LikeCommentPayload!
    addComment(input: AddCommentInput): AddCommentPayload!
    deletePost(id: ID!): DeletePostPayload!
  }
  "Theses are the Types"
  type Post {
    author: ID!,
    comments: [PostComment],
    text: String!,
    title: String!,
    tags: [String],
    date: String!
  }
  type PostComment {
    author: ID!
    body: String!
    date: String!
    likes: [likeObject]
  }
  type likeObject {
    key: String
    value: String
  }

"These are the Inputs"
input CreatePostInput {
  text: String!,
  tags: [String],
  author: ID!,
  title: String,
}

input UpdatePostInput {
  _id: ID!
  text: String,
  tags: [String],
  author: ID,
  title: String,
  votes: Int,
  favs: Int

}
  input AddCommentInput {
    postId: ID!,
    comment: String,
    authorId: ID!
  }
  input favePostInput {
    postId: ID!,
    authorId: ID!
  }
  input likeCommentInput {
    postId: ID!,
    commentId: ID!,
    authorId: ID!
  }

  
"These are the Payloads"

  type DeletePostPayload {
    id: ID!
    confirmation: String!
  }
  type CreatePostPayload {
    messageId: ID
  }
  type FavePostPayload {
    messageId: ID
  }
  type LikeCommentPayload {
    messageId: ID
  }
  type AddCommentPayload {
    messageId: ID
  }
`;