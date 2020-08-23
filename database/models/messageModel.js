const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  tags : {
    type: Array,
    required: false
  },
  date: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Message', messageSchema);

