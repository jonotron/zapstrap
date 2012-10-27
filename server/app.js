/** Basic server */
var express = require('express'),
    nconf = require('./config');

var server = exports;

server.start = function() {

  var app = express();

  var webPath = nconf.get('NODE_ENV') === 'production' ? '/build' : '';

  app.configure(function() {
    var path = require('path');
    app.use(express.bodyParser());
    
    app.set('views', __dirname + '/views');
    app.set('view engine', 'hbs');
    app.set('view options', {
      layout: false
    });

    var rootDir = path.normalize(__dirname + webPath + '/..');
    app.use('/test', express.static(rootDir + '/test'));
    app.use('/js', express.static(rootDir + '/app'));
    app.use(express.static(rootDir + '/assets'));
  });

  console.log('static', __dirname + webPath + '/app');
  console.log('static', __dirname + webPath + '/assets');

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
