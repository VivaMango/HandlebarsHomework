var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/appController.js");
var dbConnectionTest = require("./config/dbConnection.js");
var ormTest = require("./config/orm.js")
var modelTest = require("./models/model.js")


var PORT = process.env.PORT || 4500;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// HANDLEBARS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log(`APP LISTENING ON ${PORT}`);
});