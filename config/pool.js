var mysqlDb = require('./db'); //path to above db module
const dotenv = require("dotenv");
dotenv.config();
mysqlDb.init({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
