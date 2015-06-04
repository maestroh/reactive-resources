var route = require('./route-match');

module.exports.resources = function(){
	var resources = [];
	return {
		pipe: function(resource){
			resources.push(resource);
		},
		set: function(path){
			var operations = Rx.Observable.empty();

			resources.forEach(function(r){
				operations = Rx.Observable.concat(operations, r.set(path));
			})

			return operations;
		},
		get: function(path){
			var operations = Rx.Observable.empty();

			resources.forEach(function(r){
				operations = Rx.Observable.concat(operations, r.set(path));
			})

			return operations;
		},
		delete: function(path){
			var operations = Rx.Observable.empty();

			resources.forEach(function(r){
				operations = Rx.Observable.concat(operations, r.set(path));
			})

			return operations;
		}
	}
}

module.exports.resource = function(set, get, del, routes){
	var hasNoMatchingRoutes = function(deezRoutes, path){
		return deezRoutes.set.every(function(r) { return route.match(r, path) === null; }
	}
	return {
		set: function(path){
			if (hasNoMatchingRoutes(routes.set, path)){ return Rx.Observable.empty()});

			return Rx.Observable.create(function(observer){
				observer.onNext(set(path));
				observer.onCompleted();
			});
		},
		get: function(path){
			if (hasNoMatchingRoutes(routes.get, path)){ return Rx.Observable.empty()});

			return Rx.Observable.create(function(observer){
				observer.onNext(get(path));
				observer.onCompleted();
			});
		},
		delete: function(path){
			if (hasNoMatchingRoutes(routes.delete, path)){ return Rx.Observable.empty()});

			return Rx.Observable.create(function(observer){
				observer.onNext(del(path));
				observer.onCompleted();
			});
		}
	}
}


