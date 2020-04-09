const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    loyalty: {
        type: String
    }
})

module.exports = mongoose.model('Player', PlayerSchema);
