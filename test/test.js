var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  

describe('Routing', function() {
   var url = 'http://localhost:8081';
   // within before() you can run all the operations that are needed to setup your tests. In this case
   // I want to create a connection with the database, and when I'm done, I call done().
   before(function(done) {
      done();
   });
   describe('User', function() {
      it('should return the id in param', function(done) {
            request(url)
            .get('/api/user/34')
            .end(function(err, res) {
               if (err) {
                  throw err;
               }
               assert.equal(res.text, "34");
               done();
            });
      });
      it('should return the name sent', function(done) {
         var obj = { name: "Jacques", age: "55"};
            request(url)
            .post('/api/user')
            .send(obj)
            .end(function(err, res) {
               if (err) {
                  throw err;
               }
               var result = JSON.parse(res.text);
	       should(result).have.property("name", "Jacques");
               assert.equal(result.name, "Jacques");
               done();
            });
      });
      it('should student name', function(done) {
            request(url)
            .get('/api/user/student')
            .end(function(err, res) {
               if (err) {
                  throw err;
               }
               assert.equal(res.text, "plop");
               done();
            });
      });

   });
});
