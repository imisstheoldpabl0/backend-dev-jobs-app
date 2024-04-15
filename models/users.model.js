const { Pool } = require('pg');
const pool = require('../config/db_pgsql');

const users = require('./queries/users.queries')

// CREATE - POST /api/user (ejemplo archivo queries)
const createUser = async (entry) => {
  const { name, surname, location, email, password } = entry;
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

// READ - GET methods
const getAllUsers = async () => {
  let client,result;
  try{
      client = await pool.connect();
      const data = await client.query(queries.getAllUsers)
      result = data.rows
  }catch(err){
      console.log(err);
      throw err;
  }finally{
      client.release();    
  }
  return result
}

// UPDATE - PUT methods
const putUpdateUser = async () => {
  let client,result;
  try{
      client = await pool.connect();
      const data = await client.query(queries.putUpdateUser)
      result = data.rows
  }catch(err){
      console.log(err);
      throw err;
  }finally{
      client.release();    
  }
  return result
}



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


modules.exports = {
  postCreateUser,
  getAllUsers,
  putUpdateUser
}
