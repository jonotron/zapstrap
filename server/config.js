var nconf = exports = module.exports = require('nconf');

nconf.argv()
     .env();
nconf.use('memory');
