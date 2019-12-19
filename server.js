var express = require("express");

var PORT = process.env.PORT || 8085;

var app = express();


app.use(express.static('public'));

///middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//set habndlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var routes = require('./controllers/beesControllers.js')

app.use(routes);

app.listen(PORT, function () {
    console.log("Server is listening on: http//localhost:" + PORT);
})