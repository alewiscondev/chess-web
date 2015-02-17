define([
    'marionette',
    'views/AppView'
], function (Marionette, AppView) {
    return Marionette.Application.extend({
        regions: {
            main: '#content'
        },

        onStart: function() {
            this.getRegion('main').show(new AppView());
        }
    });
});