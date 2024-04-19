//const jobOffers = require("../glassdoor.json")
const Ads = require('../models/ads.model');

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