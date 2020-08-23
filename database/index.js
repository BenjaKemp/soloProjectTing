// const models = require('./models')
const Message = require('./models/messageModel.js')
const User = require('./models/userModel.js')


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/getwonkdb';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));

module.exports = {
    Message,
    User
}
