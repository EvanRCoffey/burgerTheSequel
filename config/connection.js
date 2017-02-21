//Connect to a local database called "burgers_db", with validation
var mysql = require('mysql');

// mysql://udz92gufwa03u1to:s4osu38qep2k5da9@l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zlyb10q51sb02o8d

var connection = mysql.createConnection({
  host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "udz92gufwa03u1to",
  password: "s4osu38qep2k5da9",
  database: "zlyb10q51sb02o8d"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;