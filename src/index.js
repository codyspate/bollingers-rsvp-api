import { ApolloServer } from 'apollo-server-cloud-functions';
import schema from './graphql/schema';
import { getUserFromToken } from './graphql/user/utils';

const production = process.env.STAGE === 'prod';

const getContext = async ({ req }) => {
    const { headers: { authorization } = {} } = req;
    const user = await getUserFromToken(authorization);
    return { user };
};

export const config = {
    schema,
    context: getContext,
    playground: !production,
    introspection: !production,
    tracing: !production,
    cacheControl: !production
};

const server = new ApolloServer(config);

// eslint-disable-next-line import/prefer-default-export
export const graphql = server.createHandler();
