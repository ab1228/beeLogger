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

/// put route
router.put("/api/bees/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    bee.update({
        landed: req.body.landed
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.exports = router;