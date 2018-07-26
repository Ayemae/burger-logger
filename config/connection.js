var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "8888", //MAMP
    user: "root",
    password: "root",
    database: "burgers_db"
});

module.exports = connection;