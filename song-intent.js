var Rx = require('rx');

var subject = new Rx.Subject();

module.exports = {
	subject: subject,
  set: function (path, value) {
    subject.onNext({path:path, value:value});
  }
};