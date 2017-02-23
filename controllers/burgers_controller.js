var express = require('express');

var router = express.Router();

var db = require("../models");

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
});

//////////////////////
//	
//	API ROUTING
//
//////////////////////

//C - post - create burger
router.post("/", function(req, res) {
  db.Burger.create({
    burger_name: req.body.name,
    // CustomerId: dbUser[i].id
  }).then(function(dbUser) {
    console.log(dbUser);
    res.redirect("/");
  });
});

// //C - post - create burger
// router.post("/", function(req, res) {
//   db.Customer.findAll().then(function(dbUser) {
//     for (var i = 0; i<dbUser.length; i++) {
//       if (req.body.idCustomer === dbUser[i].id) {
//         db.Burger.create({
//           burger_name: req.body.name,
//           CustomerId: dbUser[i].id
//         }).then(function(dbUser) {
//           console.log(dbUser);
//           db.Customer.findAll({where: {id:dbUserCustomerId}}).then(function(dbUser) {
//             //Update customer's burgers_purchased (+1)
//             db.Customer.update({burgers_purchased: dbUser.burgers_purchased + 1}, {where: {id: dbUser.id}}.then(function(dbUser) {
//               res.redirect("/");
//             }));
//           });
//         });
//       }
//     }
//   });
// });

// //C - post - create customer
// router.post("/newCustomer", function(req, res) {

//   db.Customer.create({
//     customer_name: req.body.nameCustomer
//   }).then(function(dbUser) {
//     console.log(dbUser);
//     res.redirect("/");
//   });
// });

//R - get - load the burgers data from "burgers"
router.get("/", function(req, res) {

  db.Burger.findAll().then(function(dbUser) {
      var dataObject = {
          burgers: dbUser
      };
       res.render("index", dataObject);
     });
});

//U - update - change devoured to false
router.put("/:id", function(req, res) {

  var shiftID = req.params.id;

  var newBurger = {
    devoured: req.body.devoured
  };

  db.Burger.update(newBurger, {where: {id: shiftID}}).then(function(dbUser) {
    console.log(dbUser);
    res.redirect("/");
  });
});

module.exports = router;