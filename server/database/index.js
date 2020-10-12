// const models = require('./models')
const Post = require('./models/message.model.js')
const User = require('./models/user.model.js')
const Player = require('./models/player.model.js')


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/getwonkdb';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
const models = {
    Post,
    User,
    Player,
}

module.exports = {
    models,
    mongoose
}