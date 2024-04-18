//const {Pool} = require('pg');
const pool = require('../config/db_pgsql');


const addFavorite = async (id_user, id_job_offer) => {
  let client;
  try {
      client = await pool.connect(); // Abro la conexión con la base de datos
      // Realiza la operación para añadir la oferta favorita al usuario
      const query = 'INSERT INTO favorites (id_user, id_job_offer) VALUES ($1, $2)';
      const values = [id_user, id_job_offer];
      await client.query(query, values);
  } catch (err) {
      console.error(err);
      throw err;
  } 
};

module.exports = {
  addFavorite
};

//modules.exports = favorites;