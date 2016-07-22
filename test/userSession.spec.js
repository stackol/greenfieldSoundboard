process.env.NODE_ENV = 'test';

var expect = require('chai').expect;
var knex = require('knex')(require('../server/config/bookshelf.config.js'));

var User = require('../server/models/user');
var Users = require('../server/collections/users');

var request = require('supertest');
var http = require('http');

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

  xit('should have post "/login" route', function(done) {
    // request.post('localhost:8000/login', {form:
    //   { email: 'test@test.com',
    //     password: 'defconbravo' }},
    //     function(err, response, body) {
    //       console.log(err);
    //       expect(response).to.not.equal(undefined);
    //       done();
    //     });
    // var user = { email: 'test@test.com', password: 'defconbravo' };
    // request(app)
    //   .post('/login')
    //   .send(user)
    //   .expect(200)
    //   .expect("marcus is stored", done);
    var options = {

    };
  });
});
