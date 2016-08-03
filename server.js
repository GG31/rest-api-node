var express = require("express");
var path = require('path');
var app = require('./app/app');
app.use(express.static(__dirname));

app.set('port', process.env.PORT || 8081);

var server = app.listen(app.get('port'), function() {
   console.log('Express server listening on port ' + server.address().port);
});


app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '/views', 'index.html'));
});
/*var server = require("http").createServer(app);


server.listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');*/
