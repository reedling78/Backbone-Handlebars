define([
    'jquery',
    'underscore',
    'backbone',
    'views/modals/modalview'
], function ($, _, Backbone, ModalView) {

    'use strict';

    var TestFormView = ModalView.extend({

        html: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eveniet, nam, voluptatem, maxime repudiandae dignissimos',
            'qui nemo nisi iste vero accusantium doloremque unde odit saepe autem aperiam tenetur distinctio veritatis.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eveniet, nam, voluptatem, maxime repudiandae dignissimos',
            'qui nemo nisi iste vero accusantium doloremque unde odit saepe autem aperiam tenetur distinctio veritatis.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eveniet, nam, voluptatem, maxime repudiandae dignissimos',
            'qui nemo nisi iste vero accusantium doloremque unde odit saepe autem aperiam tenetur distinctio veritatis.',
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