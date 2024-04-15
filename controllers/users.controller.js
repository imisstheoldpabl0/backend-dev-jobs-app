const users = require('../models/admin.model');
const Ads= require('../models/ads.model');



/* ----- USERS ----- */
// Faltan cosas revisar
// createUser
const createUser = async (req, res) => {
    const newUser = req.body; // {name, surname, location, email, password}
    const response = await users.createUser(newUser);
    res.status(201).json({
        "user_created": response,
        data: modifiedEntry
    });
}

/* ----- ADMIN ----- */
// getAllUsers
const getAllUsers = async (req, res) => {
    const modifiedEntry = req.body;
    const response = await entry.getAllUsers(modifiedEntry);
    res.status(201).json({
        msg: "usuarios listados",
        "items_updated": response,
        data: modifiedEntry
    });
}

/* ----- ADMIN > ADS ----- */
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
}

//UPDATE ads
const updateAds = async (req, res) => {
    try {
        const time = req.params.time;
        const newData = req.body;
        let ads = await Ads.updateOne({time}, newData)
        res.status(200).json(ads);
    } 
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

//DELETE ads
const deleteAds = async (req, res) => {
    try {
        const newData = req.body;
        let ads = await Ads.deleteOne(newData)
        res.status(200).json(ads);
    } 
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// getUserProfile


// editAdminProfile (update)

// deleteUser
// deleteAdmin

module.exports = {
    createUser,
    getAllUsers,
    createAds,
    updateAds,
    deleteAds
}







// USER


// CRUDE para usuarios logueados

// POST createUser (SignUp)

// UPDATE editUserProfile

// POST addFavorite

// DELETE deleteFavorites

// DELETE deleteUser (darse de baja: opcional)

// GET Resultados de la búsqueda

// GET Recover password / Restore

// Cambio de contraseña amirar


module.exports = {


}