var express = require('express');

var router = express.Router();

//importing models
var bee = require('../models/bee.js');

router.get('/', function (req, res) {
    bee.all(function (data) {
        var hbsObject = {
            bees: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});
router.post("/api/bees", function (req, res) {
    cat.create([
        "name", "landed"
    ], [
        req.body.name, req.body.sleepy
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/cats/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    cat.update({
        sleepy: req.body.sleepy
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/cats/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;