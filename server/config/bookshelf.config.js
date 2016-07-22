var knex = require('knex')(require('../knexfile'));

var Bookshelf = require('bookshelf')(knex);

Bookshelf.plugin('registry');

module.exports = Bookshelf;
