var mysql = require('mysql');
var db = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'root',
   database : 'profile_app'
});

db.connect();

module.exports = db;
