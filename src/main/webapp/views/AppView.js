define([
    'jquery',
    'backbone',
    'marionette',
    'text!templates/AppViewTemplate.hbs',
    'handlebars',
    'views/BoardView',
    'collections/ChessboardCollection',
    'views/ButtonsView'
], function($, Backbone, Marionette, AppViewTemplate, Handlebars, BoardView, Chessboard, Buttons) {


    var AppView = Backbone.Marionette.LayoutView.extend({

        template: Handlebars.compile(AppViewTemplate),

        id: 'app',

        regions: {
            board: '#board',
            buttons: '#buttons'
            //gameStatus: '#gameStatus',
        },

        onBeforeShow: function() {
            this.getRegion('board').show(new BoardView({collection: new Chessboard()}));
            this.getRegion('buttons').show(new Buttons());
        }
    });

    return AppView;
})