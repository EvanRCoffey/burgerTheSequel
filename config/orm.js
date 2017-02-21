var connection = require('./connection.js');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
	// * `selectAll()`
  selectAll: function(table_name, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table_name], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // * `insertOne()` 
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, objColVals, condition, cb) {

    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });

// * `updateOne()`
// UPDATE burgers SET devoured=1 WHERE id=2;
// The above line was tested and ran successfully in mySQL workbench
// The code below seems to match that line identically.  Not sure what's wrong.
// updateOne: function(table_name, targetString, stringWithTargetId, cb) {
// // var queryString = "UPDATE ?? SET ? WHERE ?";
// var queryString = "UPDATE " + table_name + " SET " + targetString + " WHERE " + stringWithTargetId;
// // connection.query(queryString, [table_name, targetString, stringWithTargetId], function(err, result) {
// connection.query(queryString, function(err, result) {
//   if (err) {
//     throw err;
//   }
//   cb(result);
// });
  }
};

module.exports = orm;