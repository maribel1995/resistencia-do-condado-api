const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const Room = require('../models/Room');
const Player = require('../models/Player');
const cardsConfiguration = require('../game');
const minPlayers = 5;

router.post('/:roomId', (req, res) => {
  Room.findById(req.params.roomId)
    .then(room => {
      const { playersCount, players } = room;

      //só comeca quando a sala esta estiver com no minimo 5 jogadores
      if (playersCount < minPlayers) {
        res.status(200).json({message: `Need at least ${minPlayers}`})
      }

      let cards = cardsConfiguration[playersCount]();
      players.forEach(player => {
        const shuffle = Math.floor(Math.random() * cards.length);
        const loyalty = cards[shuffle];
        cards.splice(shuffle, 1);

        Player.findByIdAndUpdate(player._id, {loyalty: loyalty}, {new: true})
        .then(player => {
          console.log(player)
        })
      });

      Game.create({players})
      .then(game => {
        res.status(200).json(game);
      })
      .catch(error => {
        res.json(error);
      })

    })
    .catch(error => {
        res.json(error);
    })
});

router.get('/', (req, res, next) => {
  Game.find()
  .populate('players')
  .then(rooms => {
    res.status(200).json(rooms);
  })
  .catch(error => {
    res.json(error);
  })
});

module.exports = router;












// router.get('/', (req, res) => {
//   const { amount } = loyaltyCards;

//   if (amount <= 0) {
//     res.status(200).json({ status: "Atingiu limite de jogadores" });
//   }

//   const updateGame = game.update(loyaltyCards);
//   loyaltyCards = game.configuration(updateGame);
//   res.status(200).json(loyaltyCards);
//   console.log(loyaltyCards.amount)
// });
  
// router.post('/', (req, res, next) => {
//   loyaltyCards = game.configuration(req.body);
//   res.send({ status: "Jogo Configurado" });
// });

// router.get('/status', (req, res) => {
//   res.status(200).json(loyaltyCards);
// });