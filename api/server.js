// const express = require('express')
// const server = express()
// const playersRouter = require('./players/players-router')
// const cors = require("cors");

// const corsOptions = {
//     origin: '*',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
// }


// server.use(cors(corsOptions)) // Use this after the variable declaration
// server.use(express.json())
// server.use('/api/players', playersRouter)


// server.use((err, req, res, next) => { // eslint-disable-line
//     res.status(500).json({
//         message: err.message,
//         stack: err.stack,
//     });
// });

// module.exports = server;

const express = require('express')
const helmet = require("helmet");
const server = express()
const playersRouter = require('./players/players-router')
const usersRouter = require('./users/users-router')
const cors = require("cors");
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')


// Original cors options below
// INPORTANT: Set origin to '*' for local API use (Postman), set origin to localhost for online use
const corsOptions = {
    // origin: 'http://localhost:3000',
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const config = {
    name: "chocolatechip",
    secret: "keep it secret, keep it safe",
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
        knex: require('../data/dbConfig'),
        tablename: "sessions",
        sidfieldname: "sid",
        createTable: true,
        clearInterval: 1000 * 60 * 60
    })
}

// server.use(bodyParser.urlencoded({ extended: true }))
// server.use(cookieParser())
server.use(helmet());
server.use(express.json())
server.use(cors(corsOptions)) // Use this after the variable declaration
server.use(session(config));
server.use('/api/users', usersRouter)
server.use('/api/players', playersRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;

