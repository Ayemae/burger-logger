var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306", //MAMP
    user: "root",
    password: "root",
    database: "burgers_db"
});

module.exports = connection;