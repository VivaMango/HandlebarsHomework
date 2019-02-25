// Database functions are dependant on the database connection in dbConnection.js
var connection = require("./dbConnection.js");

console.log(`ORM.JS LOADED`)

// Helper Functions for building our ORM

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    console.log(arr , "arr in pQM")
    return arr.toString();
  }

function keySplitter(object) {
    return Object.keys(object)
}

function valSplitter(object) {
    var returnArr = [];
    var startArr = Object.values(object)
    
    startArr.forEach(function(element) {
        if (typeof(element) === "function") {

        } else {
            returnArr.push(element)
        }
    })

    return returnArr
}

function literalSql(obj) {

    var returnArr = [];
    
    var keyArr = keySplitter(obj);
    var valArr = valSplitter(obj);
    
    array.forEach(function(element) {

    })
}

var orm = {
    
    //SQL Functions go here
    all: function(tableName, cbFunc) {
        var queryString = `SELECT * FROM ${tableName};`
        connection.query(queryString , function(err , result) {
            if (err) throw err;
            cbFunc(result);
        })
    },
    create: function(tableName , colValObj , cbFunc) {
        var queryString = "INSERT INTO " + table;

        var createKeys = keySplitter(colValObj);
        var createVals = valSplitter(colValObj);
        var colString = createKeys.join(",");
        var valString = createVals.join(",");

        queryString += " ("
        queryString += colString;
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(createVals.length);
        queryString += ") ";

        console.log(`queryString: ${queryString} AFTER BUILD`)
    },
    update: function(tableName , boolValObj , condition , cbFunc) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
    }

}

// Exporting our ORM for use in model.js
module.exports = orm;