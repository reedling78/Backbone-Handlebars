define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'views/shared/header',
  'views/modals/testform',
  'views/modals/testtext'
], function($, _, Backbone, hb, HeaderView, TestForm, TestText) {

  var RXView = Backbone.View.extend({

    tagName: 'div',

    attributes: {
      'style': 'display:none;'
    },

    render: function() {
      this.$el.append(Templates['templates/viewRX.hbs']());
      this.addFormModal();
      this.addTextModal();
      return this;
    },

    events: {
      'click [data-action="OpenFormModal"]' : 'openFormModal',
      'click [data-action="OpenTextModal"]' : 'openTextModal'
    },

    addFormModal: function(e) {
      this.FormModal = new TestForm({
        title: 'TEST Form Modal',
        id: 'testid'
      });
    },

    addTextModal: function(e) {
      this.TextModal = new TestText({
        title: 'TEST Text Modal',
        id: 'testid'
      });
    },

    openFormModal: function(){
      this.FormModal.show();
    },

    openTextModal: function(){
      this.TextModal.show();
    },

    hide: function(){
      this.$el.hide();
    },

    show: function(){
      this.$el.show();
    }

  });

  return RXView;
});