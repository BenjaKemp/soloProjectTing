import {
    makeExecutableSchema
} from '@graphql-tools/schema';
import {
    addMocksToSchema
} from '@graphql-tools/mock';
import {
    graphql
} from 'graphql';

// Fill this in with the schema string
import {schema as schemaString, resolvers} from '../../graphql';

console.log('schemaString     ', schemaString)

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({
    typeDefs: schemaString,
    resolvers
});

// Create a new schema with mocks
const schemaWithMocks = addMocksToSchema({
    schema
});

const query = `
query tasksForUser {
  user(id: 6) { id, name }
}
`;

graphql(schemaWithMocks, query).then((result) => console.log('Got result', result));