const update = loyaltyCards => {
  const cards = ["spy", "resistance"];

  let yourCard = loyaltyCards[getRandomCard(cards)];

  if (yourCard.isNotAvailable) {
    yourCard = loyaltyCards[change(yourCard)];
  }

  const yourCardUpdated = { ...yourCard, count: yourCard.count-- };
  const updatedCards = { ...loyaltyCards, ...yourCardUpdated };

  return {
    spyCount: updatedCards.spy.count,
    resistanceCount: updatedCards.resistance.count
  };
};

const change = card => {
  if (card === "spy") {
    return "resistance";
  }
  return "resistance";
};

const getRandomCard = cards => {
  const shuffle = Math.floor(Math.random() * cards.length);
  return cards[shuffle];
};

const configuration = ({ spyCount, resistanceCount }) => {
  return {
    amount: spyCount + resistanceCount,
    spy: {
      name: "spy",
      count: spyCount,
      isAvailable: spyCount > 0,
      isNotAvailable: spyCount <= 0
    },
    resistance: {
      name: "resistance",
      count: resistanceCount,
      isAvailable: resistanceCount > 0,
      isNotAvailable: resistanceCount <= 0
    }
  };
};

module.exports = { configuration, update };
