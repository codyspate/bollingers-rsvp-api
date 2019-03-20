const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { config } = require('./lib/index');

const app = express();

const server = new ApolloServer(config);
server.applyMiddleware({ app });

app.listen({ port: 3006 }, () =>
    console.log('listening on 3006', server.graphqlPath)
);
