const db = require('../../data/dbConfig')

const getAll = () => {
    return db('players')
}

const getById = (id) => {
    return db('players as pl').where('pl.player_id', id)
}
const getByName = (name) => {
    return db("players").where(name)
}

// function findBy(filter) {
//     return db("users").where(filter).orderBy("user_id");
//   }


module.exports = {
    getAll,
    getById,
    getByName
}