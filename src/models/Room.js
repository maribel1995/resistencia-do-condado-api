const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    game: {
        type: Schema.Types.ObjectId, ref: 'Game'
    },
    players: [{
        type: Schema.Types.ObjectId, ref: 'Player'
    }],
    playersCount: {
        type: Number,
        default: 1
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Room', RoomSchema);
