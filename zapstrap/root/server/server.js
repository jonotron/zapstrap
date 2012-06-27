/** Basic server */
var express = require('express'),

    nconf = require('./config'),

    app = exports.module = express.createServer();

var webPath = nconf.get('NODE_ENV') === 'production' ? '/build' : '';

app.configure(function() {
  app.use(express.bodyParser());
  
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.set('view options', {
    layout: false
  });

  app.use('/js', express.static(__dirname + webPath + '/client'));
  app.use('/assets', express.static(__dirname + webPath + '/assets'));
});

app.get('/', function(req,res) {
  res.render('app');
});

var port = nconf.get("PORT") || 8888;

app.listen(port, function() {
  console.log('Listening on ' + port);
  console.log('Running in ' + nconf.get('NODE_ENV'));
})

exports.app = app;
