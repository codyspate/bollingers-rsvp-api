import { ApolloServer } from 'apollo-server-cloud-functions';
import schema from './graphql/shared/schema';

const production = process.env.STAGE === 'prod';

const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
        headers: req.headers,
        req,
        res
    }),
    playground: !production,
    introspection: !production,
    tracing: !production,
    cacheControl: !production
});

// eslint-disable-next-line import/prefer-default-export
export const graphql = server.createHandler();
