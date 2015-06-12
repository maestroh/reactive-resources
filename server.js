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

// get resource names
var getData = function(id, trackId){return {'name':'track1', 'duration':10}; };
var getsomething = function(){return 1};
var routes = [];
routes.push(1);
routes.push({'a': getsomething});
var obj = {};
obj["a"] = getsomething();
console.log(JSON.stringify(obj));
//routes.push({'/song/:id/track/:trackId':function getData(id, trackId){return {'name':'track1', 'duration':10}; }});
			console.log(JSON.stringify(routes));
var regex = /(?:\/)(\w+)/g;
var matches, resources = [];
while (matches = regex.exec(routes[0].propertyName)){
    resources.push(matches[1]);
}

console.log(JSON.stringify(resources));
// returns [song, track]

// get resource identifiers
var routeMatch = require('./route-match');
var matchedRoutes = routeMatch.match('/song/:id/track/:trackId', '/song/0/track/1');
console.log(JSON.stringify(matchedRoutes));
// returns [["id","0"],["trackId","1"]]

// combine names and identifiers
var newArray = [];
newArray.push(resources)
var combined = newArray.concat(matchedRoutes);
console.log(JSON.stringify(combined));
// returns [[song, track],["id","0"],["trackId","1"]]

// fetch data from remote


// add data into cache
var cache = {};


// query and check to see if data is in cache
// route comes in as 

