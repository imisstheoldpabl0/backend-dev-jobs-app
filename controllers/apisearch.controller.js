/**
 * @fileoverview This file defines the controller for searching the API.
 * @exports controllers
 * @namespace controllers
 */

//const jobOffers = require("../glassdoor.json")
const Ads = require('../models/ads.model');

/**
 * Retrieves job data based on the provided title.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the job data or an error message.
 * @memberof controllers
 */
const getJob = async (req, res) => {
    try {
        const title = req.query.title;
        let jobs = await Ads.find({ title: {$regex: title, $options: 'i'} }, '-_id -__v'); //{}
        
        res.status(200).json(jobs); // Respuesta de la API para 1 producto
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
};

module.exports = {
    getJob,
};