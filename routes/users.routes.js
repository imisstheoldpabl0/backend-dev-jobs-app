/**
 * @fileoverview This file defines the routes for ads in the backend-dev-jobs-app.
 * @exports routes
 * @namespace routes
 */

const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router();

/**
 * Creates a new user.
 * @name POST /
 * @function
 * @memberof routes
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The created user.
 */
router.post('/', usersController.createUser);

/**
 * Retrieves all users.
 * @name GET /
 * @function
 * @memberof routes
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Array} An array of users.
 */
router.get('/', usersController.getAllUsers);

//router.delete("/", usersController.deleteUser);

module.exports = router;