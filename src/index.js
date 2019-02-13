import { ApolloServer } from 'apollo-server-cloud-functions';
import typeDefs from './shared/type-defs';
import resolvers from './shared/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    headers: req.headers,
    req,
    res
  }),
  playground: true,
  introspection: true
});

// eslint-disable-next-line import/prefer-default-export
export const graphql = server.createHandler();
