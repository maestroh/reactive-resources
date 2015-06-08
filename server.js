// Server
// var express = require('express');
// var app = express();
// app.use('/', express.static(__dirname));
// app.listen(8889);


// Testing route match
// var routeMatch = require('./route-match');
// console.log(JSON.stringify(routeMatch.match('/song/:id/track/:trackId', '/song/0/track/1')));


/* how can i turn /song/10/track/11 into 
 	{
 		song:[
 		{
			id: 10,
			track: [
			{
				id: 11
			}
			]
 		}
 		]}

	-or-

	[[song, id, 10], [track, id, 11]]

	-or-

	[[song, track], [id, 10], [id, 11]]

*/


var str =  '/song/:id/track/:trackId';
var regex = /(?:\/)(\w+)/g;
var matches, resources = [];
while (matches = regex.exec(str)){
    resources.push(matches[1]);
}

console.log(JSON.stringify(resources));
// returns [songs, tracks]

var routeMatch = require('./route-match');
var data = routeMatch.match('/song/:id/track/:trackId', '/song/0/track/1');
console.log(JSON.stringify(data));
// returns [["id","0"],["trackId","1"]]

var newArray = [];
newArray.push(resources)
var combined = newArray.concat(data);
console.log(JSON.stringify(combined));
// returns [[songs, tracks],["id","0"],["trackId","1"]]