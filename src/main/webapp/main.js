require.config({

    basePath: ".",

    paths: {
        'underscore': 'lib/underscore',
        'backbone' : 'lib/backbone',
        'jquery': 'lib/jquery',
        'handlebars': 'lib/handlebars',
        'marionette': 'lib/marionette',
        'text': 'lib/text',
        'App': 'app'
    },

    packages: [
        { name: 'when', location: 'lib/when', main: 'when'}
    ]
});

require(['jquery', 'App'], function($, App) {
    $(function() {
        var app = new App();
        app.start();
    });
});
