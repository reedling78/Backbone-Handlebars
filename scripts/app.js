define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'handlebars',
  'models/session'
], function($, _, Backbone, Router, Handlebars, Session) {
  
  var initialize = function() {

    require(['modules/templates'], function() {

      //Set up namespace
      window.App = {
        Models: {},
        Views: {},
        Collections: {},
        Modules: {},
        i: {
          Models: {},
          Views: {},
          Collections: {}
        }
      };

      //App Settings
      App.Models.Session = Session;
      App.i.Models.Session = new App.Models.Session({
        id: 1
      });
      App.i.Models.Session.fetch();

      Router.initialize();

    });

  };

  return {
    initialize: initialize
  };

});