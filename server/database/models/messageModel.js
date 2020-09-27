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
  tags: {
    type: Array,
    required: false
  },
  date: {
    type: String,
    required: false
  },
  comments: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    body: String,
    date: Date,
    likes: {
      type: Map,
      of: String
    },
  }],
  favs: {
    type: Map,
    of: mongoose.Schema.Types.ObjectId
  }
});

module.exports = mongoose.model('Post', messageSchema);