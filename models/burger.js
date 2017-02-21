var orm = require('../config/orm.js');

var burgers = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
		  cb(res);
		});
	},
	insertOne: function(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function(res) {
		  cb(res);
		});
	},
	updateOne: function(targetString, stringWithTargetId, cb) {
		orm.updateOne("burgers", targetString, stringWithTargetId, function(res) {
		  cb(res);
		});
	},
}

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;