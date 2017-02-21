var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require ('body-parser');
var exphbs = require("express-handlebars");
var url = require("url");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// This line is needed to link your CSS
app.use(express.static(process.cwd() + "/public"));


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});