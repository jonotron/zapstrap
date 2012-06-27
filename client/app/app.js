/** basic app **/
define(function(require) {
  var Backbone = require('backbone');

  var Template = require('hbs!app/templates/app');

  var App = Backbone.View.extend({

    template: Template,

    initialize: function(options) {
      this.render();
    },

    render: function() {
      this.$el.html(this.template());
      
      return this;
    }
  });

  return App;
});
