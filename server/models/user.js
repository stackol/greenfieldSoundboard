var Bookshelf = require('../config/bookshelf.config');

var User = Bookshelf.Model.extend({

  tableName: 'users'

});

module.exports = db.model('User', User);  
