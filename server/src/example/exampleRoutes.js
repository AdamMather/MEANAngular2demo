const express = require('express');
const router = express.Router();

const exampleController = require('./exampleController');

/* API listing. */

/* GET /api/example/ */
router.get('/', exampleController.demoEndpoint);

/* GET /api/example/error */
router.get('/error', exampleController.errorEndpoint);

module.exports = router;