define([
    'jquery',
    'backbone',
    'marionette',
    'text!templates/AppViewTemplate.hbs',
    'handlebars',
    'views/BoardView',
    '../collections/GameBoardCollection',
    'views/ButtonsView'
], function($, Backbone, Marionette, AppViewTemplate, Handlebars, BoardView, Chessboard, ButtonView) {


    var AppView = Backbone.Marionette.LayoutView.extend({

        template: Handlebars.compile(AppViewTemplate),

        id: 'app',

        regions: {
            board: '#board',
            buttons: '#buttons'
        },

        onBeforeShow: function() {
            this.getRegion('board').show(new BoardView({collection: this.options.gameBoard}));
            this.getRegion('buttons').show(new ButtonView({gameState: this.options.gameState}));
        }
    });

    return AppView;
})