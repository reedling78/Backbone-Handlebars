define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap'
], function ($, _, Backbone, Bootstrap) {

    'use strict';

    var ModalView = Backbone.View.extend({
        id: 'modal-view',

        initialize: function(options) {
            var title = options.title || '',
                appendTo = options.appendTo || 'body',
                html = Templates['templates/modalView.hbs']({
                    title: title
                });
 
            this.$el.html(html);
            this.$modalEl = this.$('.modal');
            
            this.$bodyEl = this.$('.modal-body');
            this.$titleEl = this.$('.modal-title');
            $(appendTo).append(this.el);
        },

        render: function() {
            this.$modalEl.modal({
             show: false,
             keyboard: false
            });
            
            return this;
        },

        show: function() {
            this.$modalEl.modal('show');
        }

    });

    return ModalView;
});