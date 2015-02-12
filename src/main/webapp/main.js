require.config({

    basePath: ".",

    paths: {
        'underscore': 'lib/underscore',
        'backbone' : 'lib/backbone',
        'jquery': 'lib/jquery',
        'handlebars': 'lib/handlebars',
        'marionette': 'lib/marionette',
        'AppViewTemplate': 'templates/AppViewTemplate.hbs',
        'text': 'lib/text',
        'AppView': 'views/AppView'
}
});

require(['AppView', 'marionette', 'jquery'], function(AppView, marionette, $) {
    $(function() {
        var MyApp = new Backbone.Marionette.Application();

        MyApp.addRegions({
            mainRegion: '#foo'
        });

        MyApp.addInitializer(function(options){

            var App = new AppView();
            MyApp.mainRegion.show(App);
        });

        MyApp.start();

    });
});
