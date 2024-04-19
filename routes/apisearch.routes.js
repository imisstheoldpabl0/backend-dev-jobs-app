/**
 * @fileoverview This file defines the routes for ads in the backend-dev-jobs-app.
 * @exports routes
 * @namespace routes
 */

const express = require('express');
const router = express.Router();
const apiSearchController = require('../controllers/apisearch.controller');

/**
 * GET route to retrieve a job by title.
 * @route GET /apisearch/:title?
 * @param {string} title - The title of the job (optional).
 * @returns {object} The job object.
 * @throws {Error} If there was an error retrieving the job.
 */
router.get("/:title?", apiSearchController.getJob);

module.exports = router;