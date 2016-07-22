var db = require('../config/bookshelf.config.js');
var User = require('../models/user');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;
