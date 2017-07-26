const winston = require('winston');

const env = process.env.NODE_ENV || 'development'

// Setup winston configuration based on environment
var level = env == 'production' ? 'warn' : 'debug';

winston.configure({
  transports: [
    new (winston.transports.Console)({
      level: level,
      handleExceptions: true,
      json: false,
      timestamp: true,
      prettyPrint: true,
      colorize: true
    })
  ],
  exitOnError: false
});

module.exports = winston;