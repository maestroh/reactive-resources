module.exports.match = function(route, path){
  var paramRegex = /([:])(\w+)/g;
  var resources = /([?:])(\w+)/g;
  var valueRegex = '([^/]*)';

  if (route.match(path)) return [];

  var names = route.match(paramRegex);
  if (!names) return null;
  names = names.map(function(s){return s.substring(1, s.length)});

  var routeWithCaptureGroup = route.replace(paramRegex, valueRegex);

  var values = path.match(routeWithCaptureGroup);
  if (!values) return null;
  values = values.slice(1);
  return names.map(function(name, i){ return [name,values[i]]});
}

