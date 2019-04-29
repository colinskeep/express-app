'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/express.js');
const Promise = require('bluebird');

mongoose.Promise = Promise;
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true`, {useNewUrlParser: true});
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${process.env.DB_NAME}`);
});

server.listen(process.env.API_PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`API started on port ${process.env.API_PORT}`);
});

module.exports = server;
