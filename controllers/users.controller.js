require('dotenv').config();
const { models } = require('mongoose');
const users = require('../models/users.model');

/* ----- USERS ----- */
// Faltan cosas revisar
// createUser
const createUser = async (req, res) => {
    const newUser = req.body; // {name, surname, location, email, password}
    const response = await users.createUser(newUser);
    res.status(201).json({
        "user_created": response,
        data: newUser
    });
}

// USERS TABLE
// getAllUsers
const getAllUsers = async (req, res) => {
   
  try {
    let users = await users.getAllUsers();
    }
    catch (error) {
        console.log('Error. Cannot get users list.');
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
    res.status(200).json(users);  // [] con los usuarios recuperados
}

const deleteUser = async (req, res) => {

}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser
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