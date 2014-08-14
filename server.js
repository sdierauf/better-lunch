console.log('yo! firing up the lunch server');

var express = require('express');
var app = express();

// Constants

// Port to listen on
var PORT = 3000;


var server = app.listen(PORT, function() {
    console.log('Listening on port %d', server.address.port());
});