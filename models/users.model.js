//const { Pool } = require('pg');
const pool = require('../config/db_pgsql');
const queries = require('../queries/users.queries')


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
const getAllUsers = async (list) => {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(queries.getAllUsers)
        return result.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
 
}


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

 // Autenticación: recibe dato email y contraseña y si son correctos devuelve "usuario y password correctos" 
    
 // Búsqueda por e-mail de un usuario 
/*     const verifyUser = async (currentEmail, currentPassword) => {
        let client, result;
        try {
            client = await pool.connect(); // Espera a abrir conexion
            const data = await client.query(queries.getUserByEmail, [email]);
            result = data.rows;
          if (data[0].email == currentEmail && data[0].password == currentPassword){
            res.status(200).json({msg: "Right username and password"})
        } else {
            res.status(200).json({msg: "Incorrect username and password"})
        }}
                
        catch (err) {
            console.log(err);
            throw err;
        }   finally {
                client.release();
        }
       
    } */
    

const models = {
    createUser,
    getAllUsers,
    getUserByEmail, 
    
}

module.exports = models;

//PRUEBAS

/* let loginUser = "Pahgnueggla@caramelos.es";

getUserByEmail(loginUser)
    .then(data => console.log(data)) */

/* let newUser = {
    name: "MAAAAanuehjgjhfgjhfla",
    surname: "Ájgfhjglvjbgarez",
    location:"New ggYork",
    email: "Pahgnueggla@caramelos.es",
    password: "ñlksie8747"
}

createUser(newUser)
    .then(data => console.log(data)) */

/* // UPDATE - PUT methods
const updateUser = async () => {
  let client,result;
  try{
      client = await pool.connect();
      const data = await client.query(queries.updateUser);
      result = data.rows
  } catch(err) {
      console.log(err);
      throw err;
  }finally{
      client.release();    
  }
  return result
} */
