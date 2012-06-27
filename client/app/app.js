/** basic app **/
define(function(require) {
  var Backbone = require('backbone');

  var App = Backbone.View.extend({

    initialize: function(options) {
      this.render();
    },

    render: function() {
      this.$el.html('new app');
      
      return this;
    }
  });

  return App;
});
