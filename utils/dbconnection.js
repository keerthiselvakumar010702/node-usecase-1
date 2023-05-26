const dotenv = require("dotenv");
dotenv.config()
const mysql = require('mysql2');
const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
  });
  module.exports={con}