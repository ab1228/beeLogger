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

module.exports = router;