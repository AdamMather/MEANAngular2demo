// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const compression = require('compression');
const helmet = require('helmet');
const bluebird = require('bluebird');

const environment = require('./server/src/config/environment');

environment.confirmEnvironment().then(() => {
  const config = require('./server/src/config/config').configForEnv();

  // Get our API routes
  const exampleRoutes = require('./server/src/example/exampleRoutes');

  const app = express();

  // compress all requests 
  app.use(compression())

  // Add the HelmetJS Middleware to add secure headers
  app.use(helmet());

  // Parsers for POST data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Point static path to dist
  app.use(express.static(path.join(__dirname, 'dist')));

  // Get the Mongodb connection
  const mongo = require('mongodb').MongoClient;
  const assert = require('assert');

  // Connection URL - set a default, localhost url
  var url = config.db.uri;

  var db;

  // Use connect method to connect to the server
  mongoose.connect(url);
  mongoose.Promise = bluebird;

  // Set our api routes
  app.use('/api/example', exampleRoutes)

  // Catch all other routes and return the index file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

  /**
   * Get port from environment and store in Express.
   */
  const port = process.env.PORT || '3000';
  app.set('port', port);

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, () => console.log(`API running on localhost:${port}`));
}).catch((e) => {
  console.log(e);
  return -1;
});
