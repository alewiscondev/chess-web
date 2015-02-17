define([
    'jquery',
    'backbone',
    'marionette',
    'text!templates/AppViewTemplate.hbs',
    'handlebars',
    'views/BoardView',
    'collections/ChessboardCollection'
], function($, Backbone, Marionette, AppViewTemplate, Handlebars, BoardView, Chessboard) {


    var AppView = Backbone.Marionette.LayoutView.extend({

        template: Handlebars.compile(AppViewTemplate),

        id: 'app',

        regions: {
            board: '#board'
            //gameStatus: '#gameStatus',
            //newGame: '#newGame'
        },

        onBeforeShow: function() {
            this.getRegion('board').show(new BoardView({collection: new Chessboard()}));
        }
    });

    return AppView;
})