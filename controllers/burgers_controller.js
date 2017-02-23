var express = require('express');

var router = express.Router();

var db = require("../models");
// var burgerJS = require('../models/burger.js');

//////////////////////
//	
//	HTML ROUTING
//
//////////////////////

// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {

  db.Burger.findAll().then(function(dbUser) {
      var dataObject = {
          burgers: dbUser
        };
       res.render("index", dataObject);
     });

	// burgerJS.selectAll(function(data) {
	//     var burgerObject = {
	//       burgers: data
	//     };
	//     console.log(burgerObject);
	//     res.render("index", burgerObject);
	// });
});

//////////////////////
//	
//	API ROUTING
//
//////////////////////

//C - post - create burger
router.post("/", function(req, res) {

  db.Customer.findAll().then(function(dbUser) {
    for (var i = 0; i<dbUser.length; i++) {
      if (req.body.idCustomer === dbUser[i].id) {
        db.Burger.create({
          burger_name: req.body.name,
          CustomerId: dbUser[i].id
        }).then(function(dbUser) {
          console.log(dbUser);
          res.redirect("/");
        });
      }
      else {
       console.log("An error occurred.  Burger not created.");
      }
    }
  })

  // db.Burger.create({
  //   burger_name: req.body.name
  // }).then(function(dbUser) {
  //   console.log(dbUser);
  //   res.redirect("/");
  // });

  // burgerJS.insertOne([
  //   "burger_name"
  // ], [
  //   req.body.name
  // ], function() {
  //   res.redirect("/");
  // });
});

//C - post - create customer
router.post("/newCustomer", function(req, res) {

  db.Customer.create({
    customer_name: req.body.nameCustomer
  }).then(function(dbUser) {
    console.log(dbUser);
    res.redirect("/");
  });

  // burgerJS.insertOne([
  //   "burger_name"
  // ], [
  //   req.body.name
  // ], function() {
  //   res.redirect("/");
  // });
});

//R - get - load the burgers data from "burgers"
router.get("/", function(req, res) {

  db.Burger.findAll().then(function(dbUser) {
      var dataObject = {
          burgers: dbUser
        };
       res.render("index", dataObject);
     });

	// burgerJS.selectAll(function(data) {
 //    var burgerObject = {
 //      burgers: data
 //    };
 //    console.log(burgerObject);
 //    res.render("index", burgerObject);
	// });
});

router.put("/:id", function(req, res) {

  var shiftID = req.params.id;

  var newBurger = {
    devoured: req.body.devoured
  };
  db.Burger.update(newBurger, {
    where: {
      id: shiftID
    }
  }).then(function(dbUser) {
    console.log(dbUser);
    res.redirect("/");
  });

  // var condition = "id = " + req.params.id;
  // console.log("condition", condition);
  // burgerJS.updateOne({
  //   devoured: req.body.devoured
  // }, condition, function() {
  //   res.redirect("/");
  // });
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



