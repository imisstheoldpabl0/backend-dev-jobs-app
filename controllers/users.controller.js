require('dotenv').config();
const users = require('../models/users.model');

// createUser
const createUser = async (req, res) => {
    const newUser = req.body; // {name, surname, location, email, password}
    const response = await users.createUser(newUser);
    res.status(201).json({
        "user_created": response,
        data: newUser
    });
};

// getAllUsers
const getAllUsers = async (req, res) => {
  try {
    const data = await users.getAllUsers();
    res.status(200).render("users_view.pug", {data}); 
    }
    catch (error) {
        console.log('Error. Cannot get users list.');
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
  // [] con los usuarios recuperados
};

//Localiza un usario por email
const getUserByEmail = async(email) => {
   let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getUserByEmail, [email]);
        result = data.rows;
        } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

const deleteUser = async (req, res) => {

};

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    getUserByEmail
};