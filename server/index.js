const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chatServer = require('./sockets')
// const config = require('../app/webpack.config.js');
// const index = require('../app/dist/index.html');
// const compiler = webpack(config);
const app = express();
const http = require('http').Server(app)
chatServer.listen(http)
// const io = require('socket.io')(http);
const router = require('./router');
app.use(cors())
app.use(morgan('combined'));
app.use(bodyParser.json({
  type: '*/*'
}));
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
// }));
router(app);
module.exports = app;
