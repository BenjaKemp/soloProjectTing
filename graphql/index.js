const graphqlHTTP = require('koa-graphql');
const { buildSchema } = require('graphql');

 const MyGraphQLSchema = buildSchema(`
  type Query {
    hello: String
  }
`);
// The root provides a resolver function for each API endpoint
 const  root = {
    hello: () => 'Hello world!',
};

module.exports = {
    graphqlHTTP,
    MyGraphQLSchema,
    root
}
