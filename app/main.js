/** basic main.js require */
require.config({
  baseUrl: '/js/modules',

  paths: {
    //3rd party dependencies
    'libs'                : '../libs', // generic libs
    'jquery'              : '../libs/jquery',
    'backbone'            : '../libs/backbone',
    'underscore'          : '../libs/underscore',
    'json2'               : '../libs/json2',

    'hbs'                 : '../libs/hbs',
    'handlebars'          : '../libs/Handlebars',
    'i18nprecompile'      : '../libs/hbs/i18nprecompile',
    'backbone.marionette' : '../libs/backbone.marionette',

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

  hbs: {
    disableI18n: true
  }
});
