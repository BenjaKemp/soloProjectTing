const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    playername: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: false,
    },
    games: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },

});

module.exports = mongoose.model('Player', messageSchema);