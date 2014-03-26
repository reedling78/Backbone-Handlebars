define([
    'jquery',
    'underscore',
    'backbone',
    'views/modals/modalview'
], function ($, _, Backbone, ModalView) {

    'use strict';

    var TestFormView = ModalView.extend({

        html: [
            '<form role="form">',
                '<div class="form-group">',
                    '<label for="countryCodeInput">Country Code</label>',
                    '<input type="text" class="form-control" id="countryCodeInput" placeholder="Enter country code">',
                '</div>',
                '<div class="form-group">',
                    '<label for="nameInput">Place Name</label>',
                    '<input type="text" class="form-control" id="nameInput" placeholder="Enter the place name">',
                '</div>',
                '<div id="btn-add" class="btn btn-default">Submit</div>',
            '</form>'
        ].join(''),

        events: {
            'click #btn-add': 'addNewPlace'
        },

        initialize: function() {
            ModalView.prototype.initialize.apply(this, arguments);
            this.$bodyEl.html(this.html);
        }

    });

    return TestFormView;
});