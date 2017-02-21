var express = require('express');

var router = express.Router();

var burgerJS = require('../models/burger.js');

//////////////////////
//	
//	HTML ROUTING
//
//////////////////////

// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
	burgerJS.selectAll(function(data) {
	    var burgerObject = {
	      burgers: data
	    };
	    console.log(burgerObject);
	    res.render("index", burgerObject);
	});
});

//////////////////////
//	
//	API ROUTING
//
//////////////////////

//C - post - create burger
router.post("/", function(req, res) {
  burgerJS.insertOne([
    "burger_name"
  ], [
    req.body.name
  ], function() {
    res.redirect("/");
  });
});

//R - get - load the burgers data from "burgers"
router.get("/", function(req, res) {
  	burgerJS.selectAll(function(data) {
	    var burgerObject = {
	      burgers: data
	    };
	    console.log(burgerObject);
	    res.render("index", burgerObject);
	});
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgerJS.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

// //U - put - change "devoured" to "false"
// router.put('/:id', function (req, res) {
// 	var targetString = 'devoured=1';
// 	var idVar = 'id = ' + req.params.id;
// 	console.log(targetString);
// 	console.log(idVar);

// 	burgerJS.updateOne("burgers", targetString, idVar, function(data){
// 		console.log('this works:', data);
// 	});
//   	res.redirect("/");
// })

// Export routes for server.js to use.
module.exports = router;



