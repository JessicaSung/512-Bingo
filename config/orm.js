// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('./connection.js');

// ORM 
// =============================================================

var tableName = "gamecard";

var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	allSquares: function(callback){
		var s = 'SELECT * FROM ' + tableName;

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},

	// Here our ORM is creating a simple method for performing a query of a single character in the table.
	// Again, we make use of the callback to grab a specific character from the database. 

	searchSquare: function(square, callback){
		var s = 'select * from ' + tableName + ' where square=?';

		connection.query(s,[name], function(err, result) {
	 
            callback(result);
        });

	},

	// Here our ORM is creating a simple method for adding characters to the database
	// Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement. 

	checkSquare: function(square, callback){

		// Creating a routeName so its easy to search. 
		var routeName = square.name.replace(/\s+/g, '').toLowerCase();
		console.log(routeName);

		var s = "UPDATE TABLE " + tableName + " (square) VALUES (?)";

		connection.query(s,[routeName, square.name, square.role, square.age, square.forcePoints], function(err, result) {
            
            callback(result);

        });

	}


};

module.exports = orm;