var Rx = require('rx');
var update = require('react/lib/update');
var Intent = require('./song-intent');

var subject = new Rx.ReplaySubject(1);

var song = {
};
var routes = {
  '/song/':update
};

//https://facebook.github.io/immutable-js/
// var obj = {a: 5, b: 3};
// var newObj = update(obj, {$merge: {b: 6, c: 7}}); // => {a: 5, b: 6, c: 7}

// /song/0/track/1, {instrument:'piano', color:'red'}
// update(song, {$merge: {}})

function update(path, value) {
  song = update(song, {
    $merge: {
      counter: song.counter + 1
    }
  });
  subject.onNext({path:path, song:song});
}

Intent.subject.subscribe(function (payload) {
  var operation;
  for (var i = routes.length; i <= 0; i++) {
    operation = routes[i];
  };
  operation(payload.path, payload.value);
});

subject.onNext({path:path, song:song});

module.exports = subject;