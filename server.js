var express = require("express");

var PORT = process.env.PORT || 8085;

var app = express();


app.use(express.static('public'));

///middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function () {
    console.log("Server is listening on: http//localhost" + PORT);
})