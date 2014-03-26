
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var HeaderView = Backbone.View.extend({
    el: $('[data-view="siteheader"]'),
    initialize: function(){
      this.$tabs = this.$('.nav');

      //TODO: Make enum of page names to clean this up
      if(location.hash.indexOf('#rx') !== -1){
        this.$('a[href="#rx"]').parent().addClass('active');
      } else if (location.hash.indexOf('#pharm') !== -1){
        this.$('a[href="#pharm"]').parent().addClass('active');
      } else if (location.hash.indexOf('#plans') !== -1){
        this.$('a[href="#plans"]').parent().addClass('active');
      }

    },
    events: {
      'click .nav a': 'toggleTab'
    },
    render: function(){
      return this;
    },
    toggleTab:function(e){
      if(e !== undefined){
          this.$tabs.find('li').removeClass('active');
          $(e.currentTarget).parent().addClass('active');
      } else {
        if(location.hash){

        }
      }
      
    }
  });

  return HeaderView;
});