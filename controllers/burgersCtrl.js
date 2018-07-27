var express = require("express");
var router = express.Router();

var burgers = require("../models/burgers.js");


router.get("/", function (req, res) {
    burgers.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("post route hit")
    burgers.create("name", req.body.name, function (result) {
            res.json({ id: result.insertId });
        })
})

router.put("/api/burgers/:id", function (req, res) {
    console.log(req.params)
    var condition =" id = "+req.params.id;

    console.log("condition", condition);
console.log(req.body.eaten)
    burgers.update({
        eaten: req.body.eaten
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;