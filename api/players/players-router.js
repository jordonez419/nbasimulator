const express = require('express');
// const server = require('../server');
const router = express.Router();
const Player = require('./players-model')

router.get('/', (req, res) => {
    console.log('getting all players')
    Player.getAll()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

router.get('/:id', (req, res) => {
    console.log('getting player by id')
    const { id } = req.params
    Player.getById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})



module.exports = router;