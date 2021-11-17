const express = require('express')
const server = express()
const playersRouter = require('./players/players-router')

server.use(express.json())
server.use('/api/players', playersRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;
