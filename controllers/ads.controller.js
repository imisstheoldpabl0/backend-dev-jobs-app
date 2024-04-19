const Ads= require('../models/ads.model');

//CREATE ads
const createAds = async (req, res) => {
    try {
        const data = req.body;
        let answer = await new Ads(data).save();
        res.status(201).json(answer);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};

//READ ads
async function readAllAds() {
    const ads = await Ads;
    res.status(200).json(ads);
};

//UPDATE ads
const updateAds = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        let ads = await Ads.updateOne({id}, newData);
        res.status(200).json(ads);
    } 
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};

//DELETE ads
const deleteAds = async (req, res) => {
    try {
        const newData = req.body;
        let ads = await Ads.deleteOne(newData);
        res.status(200).json(ads);
    } 
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};

module.exports = {
    createAds,
    //readAllAds,
    updateAds,
    deleteAds
};