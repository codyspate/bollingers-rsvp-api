const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const chokidar = require('chokidar');
const { config } = require('./lib/index');

const watcher = chokidar.watch('lib');

const app = express();
const server = new ApolloServer(config);
server.applyMiddleware({ app });

const startApp = () =>
    app.listen(3006, () =>
        console.log('listening on 3006', server.graphqlPath)
    );

let connection;

watcher.on('ready', () => {
    console.log('ready');
    if (connection && typeof connection.close === 'function')
        connection.close();
    connection = startApp();
});
