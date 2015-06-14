var Rx = require('rx');
var Intent = require('./song-intent');
var routeMatch = require('./route-match');

var subject = new Rx.ReplaySubject(1);

var counter = 10;

function add(count){
  counter = counter + count;
}

var routes = [];
routes.push({route:'/counter/', handler:add});

subject.onNext({path:'/counter/', count:counter});

Intent.subject.subscribe(function (payload) {
  // find matching route
  var matching = routes.filter(function(e){ return routeMatch.match(payload.path, e.route);});

  // get IDs for route
  var IDs = routeMatch.match(payload.path, matching[0].route);
  var handler = matching[0].handler;

  // call handler
  handler(payload.value, IDs);

  subject.onNext({path:payload.path, count:counter});
});


module.exports = subject;