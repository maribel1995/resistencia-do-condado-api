const express = require('express');
const router = express.Router();
const game = require('../game');
let loyaltyCards = {};

router.get('/', (req, res) => {
  const { amount } = loyaltyCards;

  if (amount <= 0) {
    res.status(200).json({ status: "Atingiu limite de jogadores" });
  }

  const updateGame = game.update(loyaltyCards);
  loyaltyCards = game.configuration(updateGame);
  res.status(200).json(loyaltyCards);
  console.log(loyaltyCards.amount)
});
  
router.post('/', (req, res, next) => {
  loyaltyCards = game.configuration(req.body);
  res.send({ status: "Jogo Configurado" });
});

router.get('/status', (req, res) => {
  res.status(200).json(loyaltyCards);
});

module.exports = router;