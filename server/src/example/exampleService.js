var exports = module.exports = {};
const logger = require('../utils/logger');
const e = require('../utils/error.js');

exports.demoService = () => {

    logger.debug('ExampleService: demoService called.');

    return Promise.resolve("Hello World");
};

exports.errorService = () => {

    logger.debug('ExampleService: errorService called.');

    return new Promise((resolve, reject) => {
        throw e.SAMPLE_ERROR_MSG
    });
};