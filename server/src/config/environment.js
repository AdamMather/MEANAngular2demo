var exports = module.exports = {};

const logger = require('../utils/logger');
const dotenv = require('dotenv');

exports.confirmEnvironment = function () {

    return new Promise((resolve, reject) => {

        //load the .env file
        dotenv.config();

        if (process.env.NODE_ENV == 'development' && (
            !process.env.MEAN_MONGO_BASE_URI)) {
            reject("ABORTING - FATAL ERROR Missing critical environment variables for development");
        } else if (process.env.NODE_ENV == 'production' && (
            !process.env.MEAN_MONGO_BASE_URI)) {
            reject("ABORTING - FATAL ERROR Missing critical environment variables for non-development environment");
        } else if (!process.env.NODE_ENV) {
            reject("ABORTING - FATAL ERROR Missing NODE_ENV to define current environment.");
        } else {
            resolve();
        }
    });
}