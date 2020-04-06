const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    players: [{
        type: Schema.Types.ObjectId, ref: 'Player'
    }],
    resistanceCount: {
        type: Number,
        required: true
    },
    spyCount: {
        type: Number,
        required: true
    },
    playerTurn: { type: Schema.Types.ObjectId, ref: 'Player'}
})

module.exports = mongoose.model('Game', GameSchema);
