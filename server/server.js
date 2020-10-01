const {
    ApolloServer
} = require('apollo-server-express');
const {
    schema,
    resolvers
} = require('./graphql');

const {
    models,
    mongoose
} = require('./database')
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models,
        me: {
            id: '1',
            firstname: 'Ben',
            lastname: 'Kemp',
            messageIds: [1]
        },
        mongoose

    },
});



server.applyMiddleware({
    app,
    path: '/graphql'
});


http.listen(8000, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});