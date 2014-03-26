define([
  'jquery',
  'underscore',
  'backbone',
  // 'handlebars',
  'views/shared/header'
], function($, _, Backbone, HeaderView) {

  var PlansView = Backbone.View.extend({

    tagName: 'div',

    attributes: {
      'style': 'display:none;'
    },

    render: function() {
      this.$el.append(Templates['templates/viewPlans.hbs']());
      return this;
    },

    hide: function(){
      this.$el.hide();
    },

    show: function(){
      this.$el.show();
    }

  });

  return PlansView;
});