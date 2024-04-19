/**
 * @fileoverview This file defines the routes for ads in the backend-dev-jobs-app.
 * @exports routes
 * @namespace routes
 */

const express = require('express');
const router = express.Router();
const app = express();

const adsController = require('../controllers/ads.controller');

/**
 * Route for creating a new ad.
 * @name POST /ads
 * @function
 * @memberof routes
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The created ad.
 */
router.post("/", adsController.createAds);

/**
 * Route for updating an existing ad.
 * @name PUT /ads/:id
 * @function
 * @memberof routes
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The updated ad.
 */
router.put("/:id", adsController.updateAds);

/**
 * Route for deleting ads.
 * @name DELETE /ads
 * @function
 * @memberof module:routes/ads.routes
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The deleted ad.
 */
router.delete("/", adsController.deleteAds);

module.exports = router;