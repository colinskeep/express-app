const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./router.js');
const morgan = require('morgan');

const corsOptions = {
  origin: (origin, callback) => {
    if (origin == undefined ||
      process.env.CORS_WHITELIST.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback('Not allowed by CORS');
    }
  },
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Content-Length',
    'X-Requested-With',
    'Accept',
  ],
  methods: [
    'GET',
    'PUT',
    'POST',
    'DELETE',
    'OPTIONS',
  ],
  optionsSuccessStatus: 200,
};

const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server, {
  pingInterval: 25000,
  pingTimeout: 60000,
  cookie: false,
});
require('./clients/socket.js')(io);

app.set('socketio', io);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compress());
app.use(helmet());
app.use(cors(corsOptions));
app.use('/', routes);

module.exports = server;
