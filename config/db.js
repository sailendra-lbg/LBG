const {createPool} = require("mysql");
var db;
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    init: function (conf) {
        if (!db) {
            db = createPool({
                host: conf.host,
                user: conf.user,
                password: conf.password,
                database: conf.database
            });
        }
    },
    get: function () {
        if (!db) {
            throw new Error('The db pool has not been initialized, call init({}) prior to get().');
        }

        return db;
    }
};