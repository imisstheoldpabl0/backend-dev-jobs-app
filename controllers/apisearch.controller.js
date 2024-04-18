//const jobOffers = require("../glassdoor.json")
const Ads = require('../models/ads.model');

/* const getSearchResults = async (req, res) => {
    res.status(200).json(jobOffers)
    //Función que haga web scraping con el valor que haya en el input
} */
const getJob = async (req, res) => {

    try {
        const title = req.query.title;
        console.log(title);
        let jobs = await Ads.find({ title: {$regex: title, $options: 'i'} }, '-_id -__v'); //{}
        
        res.status(200).json(jobs); // Respuesta de la API para 1 producto
        console.log('esto es lo que has buscado: ' + jobs);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    getJob,
}