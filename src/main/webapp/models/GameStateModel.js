define([
    'backbone'
], function (
    Backbone


    ) {
    var GameStateModel = Backbone.Model.extend({

        defaults: {
            currentPlayer: '',
            gameOver: '',
            inCheck: '',
            positionToPieces: []
        },



        urlRoot: function () {
            return "/api/chess";
        }

    });

    return GameStateModel;
})
