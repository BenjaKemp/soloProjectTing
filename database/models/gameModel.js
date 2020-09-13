const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    positions: {
        type: Array,
        required: true,
    },
    date: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Player', messageSchema);
