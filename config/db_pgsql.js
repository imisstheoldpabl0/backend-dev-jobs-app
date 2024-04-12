const {Pool}= require('pg');
const pool = require('../config/db_pgsql');

  //enviroment variables for db connection
const pool = new Pool({ 
    user: process.env.USER, 
    host: process.env.HOST, 
    database: process.env.DATABASE, 
    password: process.env.PASSWORD 
});

module.exports=pool;