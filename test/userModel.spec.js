process.env.NODE_ENV = 'test';

var expect = require('chai').expect;
var knex = require('knex')(require('../server/config/bookshelf.config.js'));

var User = require('../server/models/user');

describe('User Route', function() {
  // beforeEach(function(done) {
  //   return knex.migrate.rollback()
  //     .then(function() {
  //       return knex.migrate.latest();
  //     })
  //     .then(function() {
  //       done();
  //     });
  // });

  it('should not have any models', function(done) {
    User.forge().fetch().then(function(results) {
      expect(results).to.equal(null);
      done();
    });
  });

  it('should save a model to the database', function(done) {
    var user = new User({
      username: 'test@test.com',
      password: 'defconbravo',
    }).save()
    .then(function() {
      return User.where({username: 'test@test.com'}).fetch();
    })
    .then(function(user) {
      expect(user.get('password')).to.equal('defconbravo');
      done();
    });
  });

  // after(function (done) {
  //   return knex.migrate.rollback()
  //     .then(function() {
  //       done();
  //     });
  // });
});
