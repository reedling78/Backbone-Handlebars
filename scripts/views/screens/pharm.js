define([
  'jquery',
  'underscore',
  'backbone',
  'views/shared/header',
  'modules/googlemaps'
], function($, _, Backbone, HeaderView, GoogleMap) {

  var PharmView = Backbone.View.extend({

    tagName: 'div',

    attributes: {
      'style': 'display:none;'
    },

    render: function() {
      this.$el.append(Templates['templates/viewPharm.hbs']());
      return this;
    },

    hide: function(){
      this.$el.hide();
    },

    show: function(){
      this.$el.show();
    },

    startMap: function(){
      var $map = $('[data-module="GoogleMap"]');

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        GoogleMap.Initialize($map);
      }

      function showPosition(position) {
        GoogleMap.Initialize($map, position.coords.longitude, position.coords.latitude);
      }

    }

  });

  return PharmView;
});