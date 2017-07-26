const logger = require('../utils/logger');

module.exports = {
    SAMPLE_ERROR_MSG: { code: 1, status: 400, msg: "Sample error message" },
    SAMPLE_ERROR_MSG_2: { code: 2, status: 400, msg: "Sample error message (2)" }
}

module.exports.respond = (res) => (error) => {
    if (isErrorObject(error)) {
        logger.debug("Error Response: " + error.code + ": " + error.msg);
        res.status(error.status).send({
            code: error.code,
            msg: error.msg
        });
    } else {
        const errorCode = getUnexpectedErrorCode();
        logger.error("UNHANDLED ERROR (" + errorCode + "):" + error.stack);
        res.status(500).send({
            code: errorCode
        });
    }
}

isErrorObject = function (error) {
    return error && error.code && error.status && error.msg;
}

/**
 * Currently, our unexpected error code will be a random number in the range 1000-100,000.
 * This will link up to the code output in our logs.
 */
getUnexpectedErrorCode = function () {
    return Math.floor(Math.random() * 99000) + 1000;
}