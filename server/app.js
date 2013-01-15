/** Basic server */
var express = require('express'),
    nconf = require('./config');

var server = exports;

server.start = function() {

  var app = express();

  var appPath = nconf.get('NODE_ENV') === 'production' ? '/build' : '/app';
  var rootDir = require('path').normalize(__dirname + '/..');


  app.configure(function() {
    app.use(express.bodyParser());
    
    app.set('views', __dirname + '/views');
    app.set('view engine', 'hbs');

    app.use('/test', express.static(rootDir + '/test'));
    app.use('/js', express.static(rootDir + appPath));
    app.use(express.static(rootDir + '/assets'));
  });

  app.get('/', function(req,res) {
    res.render('app');
  });

  var port = nconf.get("PORT") || 8888;

  app.listen(port, function() {
    console.log('Listening on ' + port);
    console.log('Running in ' + nconf.get('NODE_ENV'));
  });

  return app;
};
