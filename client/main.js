/** basic main.js require */
require.config({
  baseUrl: '/js/modules',

  paths: {
    //3rd party dependencies
    'libs':         '../libs', // generic libs
    'jquery':       '../libs/jquery',
    'backbone':     '../libs/backbone',
    'underscore':   '../libs/underscore',
    'json2':        '../libs/json2',

    'hbs':          '../libs/hbs',
    'Handlebars':   '../libs/Handlebars',

    // application paths
    'app':          '../app',

    'test':         '../../test',
  },

  shim: {
    'json2':        { exports: 'JSON' },
    'underscore':   { exports: '_'},
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },

  map: {
    'hbs': {
      './hbs/json2': '../libs/json2',
      './hbs/underscore': '../libs/underscore'
    }
  },

  hbs: {
    disableI18n: true
  }
});
