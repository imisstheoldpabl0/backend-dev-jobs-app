/**
 * @fileoverview This file defines the routes for ads in the backend-dev-jobs-app.
 * @exports routes
 * @namespace routes
 */

const express = require('express');
const router = express.Router();

const apiFavoriteController = require("../controllers/apifavorites.controller");

/**
 * Express router for favorites routes.
 * @type {object}
 * @const
 * @namespace routes
 */


router.post("/:id", apiFavoriteController.createFavorite)

    /**
     * Route for creating a favorite.
     * @name POST/:id
     * @function
     * @memberof routes
     * @param {string} id - The ID of the favorite.
     * @returns {object} The created favorite.
     */


module.exports = router;
