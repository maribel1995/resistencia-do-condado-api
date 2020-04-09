const R = 'R';
const S = 'S';

const cardsConfiguration = {
  5: () => {
    return [R,R,R,S,S]
  },
  6: () => {
    return [R,R,R,R,S,S]
  },
  7: () => {
    return [R,R,R,R,S,S,S]
  },
  8: () => {
    return [R,R,R,R,R,S,S,S]
  },
  9: () => {
    return [R,R,R,R,R,R,S,S,S]
  },
  10: () => {
    return [R,R,R,R,R,R,S,S,S,S]
  },

}

module.exports = cardsConfiguration;
