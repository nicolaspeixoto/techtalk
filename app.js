var express = require('express');
var users = require('./routes/users');
var app = express();

app.use('/users', users);

var server = app.listen(3000, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('tech talk app listening at http://%s:%s', host, port);
});
