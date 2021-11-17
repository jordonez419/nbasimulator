const db = require('../../data/dbConfig')

const getAll = () => {
    return db('players')
}

const getById = (id) => {
    return db('players as pl').where('pl.player_id', id)
}


module.exports = {
    getAll,
    getById
}