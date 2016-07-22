process.env.NODE_ENV = 'test';

var expect = require('chai').expect;
var knex = require('knex')(require('../server/config/bookshelf.config.js'));

var User = require('../server/models/user');
var Users = require('../server/collections/users');

describe('Login, Signup, and Sessions', function() {
  beforeEach(function(done) {
    User.where({ email: 'test@test.com' }).fetch()
      .then(function(user) {
        if (!user) {
          new User ({
            email: 'test@test.com',
            password: 'defconbravo'
          }).save().then(function() {
            done();
          });
        } else {
          done();
        }
      });
  });

  xit('should send proper post request for login', function(done) {
    done();
  });
});
