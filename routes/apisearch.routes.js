const express = require('express');
const router = express.Router();
const apiSearchController = require('../controllers/apisearch.controller');

router.get("/:title?", apiSearchController.getJob);

module.exports = router;