// Importing our ORM to make an object model with methods that interact with our database
var orm = require("../config/orm.js");


var ItemConstructor = function Item () {};

// Attaching ORM methods to ItemConstructor prototype
ItemConstructor.prototype.all = orm.all;
ItemConstructor.prototype.create = orm.create;
ItemConstructor.prototype.update = orm.update;

module.exports = ItemConstructor