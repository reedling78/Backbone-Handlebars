require.config({
    // baseUrl: '/scripts',
    paths: {
        'async': 'plugins/async-0.1.1',
        'jquery': 'libs/jquery/jquery-1.11.0',
        'underscore': 'libs/underscore/underscore-1.6.0',
        'backbone': 'libs/backbone/backbone-1.1.2',
        'backbone.localStorage': 'libs/backbone/backbone.localStorage',
        'bootstrap': 'libs/bootstrap/bootstrap',
        'handlebars': 'libs/handlebars/handlebars-1.3.0'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        }
    }
});

require([
  'app',
  'modules/polyfill'
], function(App, Polyfill){
    Polyfill.initialize();
  App.initialize();
});