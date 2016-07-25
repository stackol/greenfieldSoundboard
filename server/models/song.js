var db = require('../config/bookshelf.config.js');

var Song = db.Model.extend({
  tableName: 'songs',
  hasTimestamps: true,
  initialize: function(){
    
  }

});

module.exports = Song;
