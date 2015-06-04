module.exports.match = function(route, path){
  var paramRegex = /([:])(\w+)/g;
  var valueRegex = '([^/]*)';

  var names = route.match(paramRegex).map(function(s){return s.substring(1, s.length)});
  var routeWithCaptureGroup = route.replace(paramRegex, valueRegex);
  var values = path.match(routeWithCaptureGroup).slice(1);

  return names.map(function(name, i){ return [name,values[i]]});
}
