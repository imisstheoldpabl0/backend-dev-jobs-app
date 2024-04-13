const {Pool} = require('pg');
const pool = require('../config/db_pgsql');

const favorites = require('./queries/favorites.queries')

// CREATE - POST methods

// READ - GET methods

// UPDATE - PUT methods

// DELETE - DELETE methods


/* Ejemplo de modelo de otro ejercicio

const getAuthorsByEmail = async (email) => {
    let client, result;
    try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.getAuthorsByEmail, [email]);
      result = data.rows;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      client.release();
    }
    return result;
  }; */


modules.exports = favorites;