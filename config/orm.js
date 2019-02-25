// Database functions are dependant on the database connection in dbConnection.js
var connection = require("./dbConnection.js");

console.log(`ORM.JS LOADED`)

var orm = {
    
    //SQL Functions go here

}

// Exporting our ORM for use in model.js
module.exports = orm;