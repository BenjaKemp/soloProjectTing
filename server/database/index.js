// const models = require('./models')
const Message = require('./models/messageModel.js')
const User = require('./models/userModel.js')
const Player = require('./models/playerModel.js')


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/getwonkdb';

mongoose.connect(url, {
    useNewUrlParser: true
});
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
const models = {
    Message,
    User,
    Player,
}

module.exports = {
    models,
    mongoose
}