const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const Room = require('../models/Room');
//const game = require('../../game');
//let loyaltyCards = {};
const minPlayers = 5;
router.post('/:roomId', (req, res) => {
  //só comeca quando a sala esta estiver com no minimo 5 jogadores
  Room.findById(req.params.roomId)
    .then(room => {
      const { playersCount } = room;

      if (playersCount < minPlayers) {
        res.status(200).json({message: `Need at least ${minPlayers}`})
      }

      Game.create({})
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