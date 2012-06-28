/** basic main.js require */
require.config({
  baseUrl: 'modules',

  paths: {
    //3rd party dependencies
    'libs':         '../libs', // generic libs
    'jquery':       '../libs/jquery',
    'backbone':     '../libs/backbone',
    'underscore':   '../libs/underscore',
    'json2':        '../libs/json2',

    // application paths
    'app':          '../app', 
  },

  shim: {
    'json2':        { exports: 'JSON' },
    'underscore':   { exports: '_'},
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require([   'jquery',   'app/app'],
  function ( $,         App) {
    var app = new App({el: $('#app')});
  }
);
