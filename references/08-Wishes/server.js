var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 3603;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "wishes_db"
});


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});


app.get("/", function (req, res) {
    connection.query("SELECT * FROM wishes", function (err, data) {
        if (err) throw err;
        res.render("content", { wishes: data });
    })
})




app.post("/", function (req, res) {
    // Test it
    // console.log('You sent, ' + req.body.task);

    // Test it
    // return res.send('You sent, ' + req.body.task);

    // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
    // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
    // https://en.wikipedia.org/wiki/SQL_injection



    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function (err, result) {
        if (err) {
            throw err;
        }

        res.redirect("/");
    });
});

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});