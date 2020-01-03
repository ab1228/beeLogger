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

/// post route
router.post("/api/bees", function (req, res) {
    bee.create([
        "name", "landed"
    ], [
        req.body.name, req.body.landed
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

/// put route
router.put("/api/bees/:id", function (req, res) {


    bee.update(req.params.id, function (result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
    });
});
// put route -> back to index
// router.put("/burgers/:id", function (req, res) {
//     burger.update(req.params.id, function (result) {
//         // wrapper for orm.js that using MySQL update callback will return a log to console,
//         // render back to index with handle
//         console.log(result);
//         // Send back response and let page reload from .then in Ajax
//         res.sendStatus(200);
//     });
// });






module.exports = router;