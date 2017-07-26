const exampleService = require('./exampleService');
const logger = require('../utils/logger');
const e = require('../utils/error.js');

var exports = module.exports = {};

exports.demoEndpoint = function (req, res) {

  logger.debug('ExampleController: demoEndpoint called.');

  exampleService.demoService()
    .then(data => res.status(200).send(data))
    .catch(e.respond(res));

}

exports.errorEndpoint = function (req, res) {

  logger.debug('ExampleController: errorEndpoint called.');

  exampleService.errorService()
    .then(data => res.status(200).send(data))
    .catch(e.respond(res));

}