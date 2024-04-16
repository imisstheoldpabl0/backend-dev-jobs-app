//const users = require('../models/admin.model');

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

module.exports = {
    createUser,
    getAllUsers,
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