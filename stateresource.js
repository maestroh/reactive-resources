var route = require('route-match');

var data = {
	song:[
	{
		id:0,
		track:[{
			id:0,
			type:'Piano'
		}]	
	}]
}

var getTrack = function(songId, trackId){
	return data
	.song.filter(function(s){return s.id === songId;})[0]
	.track.filter(function(t) {return t.id === trackId;})[0];
}


var remoteResource = function(){
	var routes = [{'/song/0/track/0':getTrack}];


	return {
		set: function(path){
			
		},
		get: function(path){
			
		},
		delete: function(path){
			
		}
	}
}
