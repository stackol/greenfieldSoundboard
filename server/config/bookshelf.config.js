
var path = require('path');
var db = require('knex')({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'password',
    database: 'soundboard',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/sb.sqlite')
  }
});

db.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('email', 100).unique();
      user.string('password', 100);
      user.timestamps();
    }).then(function () {
      console.log('Created users table');
    });
  }
});
db.schema.hasTable('songs').then(function(exists) {
  if (!exists) {
    db.schema.createTable('songs', function (song) {
      song.increments('id').primary();
      song.varchar('record');
      song.varchar('title');
      song.timestamps();
    }).then(function () {
      console.log('Created songs table');
    });
  }
});
var Bookshelf = require('bookshelf')(db);
module.exports = Bookshelf;
