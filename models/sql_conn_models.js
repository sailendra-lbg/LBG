let dbConfig = require("../config/pool");
mysqlDb = require("../config/db");

const dotenv = require("dotenv");
let pool  = mysqlDb.get(); 

exports.getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                return reject(err);
            }
            resolve(connection);
        });
    });
};