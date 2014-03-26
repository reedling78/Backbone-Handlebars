// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',

  'views/screens/pharm',
  'views/screens/rx',
  'views/screens/plans',
  'views/shared/header',

], function($, _, Backbone, PharmView, RXView, PlansView, HeaderView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      'pharm': 'showPharm',
      'rx': 'showRX',
      'plans': 'showPlans',
      
      '*actions': 'showRX'
    },
    
    showPharm: function(){
      this.trigger('showPharm');
    },
    showRX: function(){
      this.trigger('showRX');
    },
    showPlans: function(){
      this.trigger('showPlans');
    }


  });

  var initialize = function(){

    var app_router = new AppRouter();

    var $main = $('[role="main"]');

    var pharmView = new PharmView();
    var rxView = new RXView();
    var plansView = new PlansView();

    var headerView = new HeaderView();

    $main.append(pharmView.render().el);
    $main.append(rxView.render().el);
    $main.append(plansView.render().el);

    pharmView.startMap();

    app_router.on('showPharm', function(){
      rxView.hide();
      plansView.hide();

      pharmView.show();
      pharmView.delegateEvents();
    });
    
    app_router.on('showRX', function(){
      plansView.hide();
      pharmView.hide();

      rxView.show();
      rxView.delegateEvents();
    });

    app_router.on('showPlans', function(){
      rxView.hide();
      pharmView.hide();
      
      plansView.show();
      plansView.delegateEvents();
    });

    Backbone.history.start();

  };


  return {
    initialize: initialize
  };


});