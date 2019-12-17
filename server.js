var express = require("express");

var PORT = process.env.PORT || 8085;

var app = express();


app.listen(PORT, function () {
    console.log("Server is listening on: http//localhost" + PORT);
})