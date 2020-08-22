const models = require('./models')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/getwonkdb';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));

module.exports = { models }
