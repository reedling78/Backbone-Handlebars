define([
    'backbone',
    'backbone.localStorage'
], function(Backbone) {
    
    return Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage("AppSettings"),
        defaults: {
            'backgroundColor': '#999999',
            'celsius': true,
            'welcomeMessage': 'Welcome'
        },
        initialize: function(){
            var thiz = this;
            this.on('change', function(){
                thiz.save();
            });
        }
    });

});