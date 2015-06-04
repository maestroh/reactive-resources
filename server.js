// var express = require('express');
// var app = express();


// app.use('/', express.static(__dirname));


// app.listen(8889);

var routeMatch = require('./route-match');

console.log(JSON.stringify(routeMatch.match('/song/:id/track/:trackId', '/song/0/track/1')));