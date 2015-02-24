define([
    'backbone',
    '../collections/GameBoardCollection',
    'when'
], function (
    Backbone,
    Squares,
    when

    ) {
    var GameStateModel = Backbone.Model.extend({

        defaults: {
            currentPlayer: '',
            gameOver: '',
            inCheck: '',
            positionToPieces: [],
        },



        urlRoot: function () {
            return "/api/chess";
        }

    });

    return GameStateModel;
})
