define(function(require) {
  var Marionette = require('backbone.marionette')
    , Template = require('hbs!app/templates/layout');
    ;

  var MainLayout = Marionette.Layout.extend({
    className: 'app',
    template: Template,
    regions: {
      main: '#main-region' 
    }
  });

  return MainLayout;
});
