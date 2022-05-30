const db = require('../../data/dbConfig')

const getAll = () => {
    return db('users')
}

const getById = (id) => {
    return db('users as us').where('us.user_id', id).first()
}

const createUser = (user_name, password) => {
    return db('users').insert({ user_name, password })
}

const findBy = (filter) => {
    return db("users").where(filter).orderBy("user_id");
}

module.exports = {
    getAll,
    getById,
    createUser,
    findBy
}