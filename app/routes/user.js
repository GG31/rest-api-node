var db = require('../models/db.js');
var express = require('express');
var router = express.Router();
var student = require('./student');


/*Middleware*/
router.use('/user$', function(req, res, next) {
  console.log('On middleware 1', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('On middleware 2:', req.method);
  next();
});

router.use('/user/student', student);

router.route('/user')
   .get(function(req, res) {
      db.query('SELECT * FROM user;', function(err, rows, fields) {
         if (err) throw err;
         res.send(JSON.stringify(rows[0]));
      });
   })
   .post(function(req, res) {
      console.log(req.body);
      console.log(req.body.name);
      res.send('{"name": "' + req.body.name + '"}'); 
   });

router.route('/user/:id')
   .get(function(req, res) {
      res.send(req.params.id);
   });

module.exports = router;

