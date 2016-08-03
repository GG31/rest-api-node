var bodyParser = require('body-parser');
var user = require('./routes/user');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', user);

module.exports = app;
