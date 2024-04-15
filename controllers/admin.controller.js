const users = require('../models/admin.model');

// Controllers básicos CRUDE


// Faltan cosas revisar
// createUser (cuando se registra) - Se envía por post los datos del usuario a crear {username, email, password} y retorna un status 201 
const postCreateUser = async (req, res) => {
    const modifiedEntry = req.body; // {username, email, password}
    const response = await entry.postCreateUser(modifiedEntry);
    res.status(201).json({
        msg: "usuario creado",
        "items_updated": response,
        data: modifiedEntry
    });
}

const getAllUsers = async (req, res) => {
    const modifiedEntry = req.body;
    const response = await entry.getAllUsers(modifiedEntry);
    res.status(201).json({
        msg: "usuarios listados",
        "items_updated": response,
        data: modifiedEntry
    });

// getAllUsers



// getUserProfile


// editAdminProfile (update)

// deleteUser
// deleteAdmin

module.exports = {
    postCreateUser,
};