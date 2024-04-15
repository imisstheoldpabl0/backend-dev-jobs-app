const { Pool } = require('pg');
const pool = require('../config/db_pgsql');

const queries = require('./queries/users.queries')

// CREATE - POST /api/user (ejemplo archivo queries)
const createUser = async (user) => {
  const { username, email, password } = user;
  let client, result;
  try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.createUser, [
          username,
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
const updateUser = async () => {
  let client,result;
  try{
      client = await pool.connect();
      const data = await client.query(queries.updateUser)
      result = data.rows
  }catch(err){
      console.log(err);
      throw err;
  }finally{
      client.release();    
  }
  return result
}

modules.exports = {
  createUser,
  getAllUsers,
  updateUser
}
