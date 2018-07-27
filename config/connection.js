var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: "3306", //MAMP
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}

module.exports = connection;