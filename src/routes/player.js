const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

router.post('/', (req, res, next) => {
    const { nickname, loyalty } = req.body;
    Player.create({ nickname, loyalty})
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    });
});

router.get('/', (req, res, next) => {
    Player.find()
    .then(players => {
        res.status(200).json({ players });
    })
    .catch(error => {
        res.json(error);
    });
});

router.get('/:id', (req, res, next) => {
    Player.findById(req.params.id)
    .then(player => {
        res.status(200).json(player)
    })
    .catch(error => {
        res.json(error);
    })
});

router.put('/:id', (req,res, next) => {
    Player.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.json({message: `Player with ${req.params.id} is updated successfully.`})
    })
});

module.exports = router;
