/** basic app **/
define(function(require) {
  var Marionette = require('backbone.marionette')
    , MainLayout = require('app/layout')
    ;

  var App = new Marionette.Application();

  App.addInitializer(function(options) {
    App.main = new MainLayout();
    $('body').html(App.main.render().el);
  });

  return App;
});
