const koa = require('koa');
const mount = require('koa-mount');

const app = new koa();
const {
    MyGraphQLSchema,
    graphqlHTTP
} = require('./graphql')

// The root provides a resolver function for each API endpoint

app.use(mount, '/graphql', graphqlHTTP( {
    schema: MyGraphQLSchema,
    graphiql: true
}));

app.listen(8000, function () {
    console.log('Server running on https://localhost:8000')
});