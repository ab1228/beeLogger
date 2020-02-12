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
    // takes the request object using it as input for burger.addBurger
    bee.create(req.body.name, function (result) {
        // wrapper for orm.js that using MySQL insert callback will return a log to console,
        // render back to index with handle
        console.log(result);
        res.redirect("/");
    });
})

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







module.exports = router;