const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

router.post('/', (req, res, next) => {
    const { player } = req.body;
    const name = `Sala de ${player.nickname}`;
    Room.create({ name, players: [player.id], playersCount: 1 })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    });
});

router.get('/', (req, res, next) => {
    Room.find()
    .then(rooms => {
        res.status(200).json({ rooms });
    })
    .catch(error => {
        res.json(error);
    });
});

router.get('/:id', (req, res, next) => {
    Room.findById(req.params.id)
    .then(room => {
        res.status(200).json(room)
    })
    .catch(error => {
        res.json(error);
    })
});

router.put('/:id', (req,res, next) => {
    Room.findByIdAndUpdate(req.params.id, req.body)
    .then((room) => {
        res.json(room)
    })
    .catch(error => {
        res.json(error);
    })
});

//player join room
router.put('/join/:id', (req,res,next) => {
    const { player } = req.body;
    Room.findByIdAndUpdate(req.params.id, {$push: { players: player }, $inc: {playersCount: 1}}, {new: true})
    .then((room) => {
        res.json({room})
    })
    .catch(error => {
        res.json(error);
    })
})

module.exports = router;
