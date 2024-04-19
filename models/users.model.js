//const { Pool } = require('pg');
const pool = require('../config/db_pgsql');
const queries = require('../queries/users.queries');

// Crea un usuario - POST
const createUser = async (newUser) => {
    const { name, surname, location, email, password } = newUser;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createUser, [
            name,
            surname,
            location,
            email,
            password
        ]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

// Listado de todos los usuarios - GET
const getAllUsers = async () => {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(queries.getAllUsers);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
};

// Búsqueda por e-mail de un usuario 
const getUserByEmail = async (email) => {
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

const models = {
    createUser,
    getAllUsers,
    getUserByEmail, 
}

module.exports = models;