var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3333", //MAMP
    user: "root",
    password: "root",
    database: "burger_logger_db"
});

module.exports = connection;