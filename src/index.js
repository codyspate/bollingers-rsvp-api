import { ApolloServer } from 'apollo-server-cloud-functions';
import schema from './graphql/schema';
import { getUserFromToken } from './graphql/user/utils';

const production = process.env.STAGE === 'prod';

const getContext = async ({ req }) => {
    const { headers: { authorization } = {} } = req || {};
    if (!authorization) return {};
    const user = await getUserFromToken(authorization.replace('Bearer ', ''));
    return { user };
};

export const config = {
    schema,
    context: getContext,
    playground: true,
    introspection: true,
    tracing: !production,
    cacheControl: !production
};

const server = new ApolloServer(config);

// eslint-disable-next-line import/prefer-default-export
export const graphql = server.createHandler({
    cors: {
        origin: production,
        credentials: production,
        methods: ['GET', 'POST', 'OPTIONS']
    }
});
