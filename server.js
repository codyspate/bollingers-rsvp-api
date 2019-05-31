const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const { config } = require('./lib/index');

const app = express();
app.use(
    cors({
        origin: (origin, cb) => {
            cb(null, true);
        },
        credentials: true,
        allowedHeaders: ['Content-Type', 'authorization']
    })
);
const server = new ApolloServer(config);
server.applyMiddleware({ app });

app.listen(3006, () => console.log('listening on 3006', server.graphqlPath));
