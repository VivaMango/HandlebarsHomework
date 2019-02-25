// Connecting to our mySQL database
var mysql = require("mysql");

console.log(`DBCONNECTION.JS LOADED`)

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "testpass",
  database: "drifters_db"
});

connection.connect(function(err) {
  if (err) {
    console.error(`ERROR CONNECTING ${err.stack}`);
    return;
  }
  console.log(`CONNECTED TO DATABASE AS ID ${connection.threadId}`);
});

module.exports = connection;