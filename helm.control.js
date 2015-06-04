var browserify = require('browserify');
var helm = require('helm-control');
var fs = require('fs');
var nodemon = require('nodemon');

helm.command('bundle', [], 
  function(done){

    var b = browserify(['./example.js']);
    b.bundle()
    .pipe(fs.createWriteStream(__dirname + '/public/example.js'))
    .on('error', function(error){console.log('script: ' + error);})
    .on('finish',done);
  });



helm.command('app',
							['bundle'],
              function(){
                  var config = 
                  { 
                    verbose: true, 
                    script: './server.js'
                  }

                  nodemon(config)
                  .on('start', function () {
                    console.log('nodemon started');
                  })
                  .on('crash', function () {
                    console.log('script crashed for some reason');
                  });
                }
              );

helm.engage(['app']);
helm.standby(['*'], ['bundle']);