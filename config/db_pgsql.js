require('dotenv').config();
const { Pool } = require('pg');
//const pool = require('../config/db_pgsql');
  //enviroment variables for db connection
const pool = new Pool({ 
    user: process.env.DB_USER, 
    host: process.env.DB_HOST, 
    database: process.env.DB_DATABASE, 
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD 
});

module.exports = pool;