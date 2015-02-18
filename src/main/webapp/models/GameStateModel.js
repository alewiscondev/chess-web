define([
    'backbone'
], function (
    Backbone

    ) {
    var GameStateModel = Backbone.Model.extend({

        defaults: {
            currentPlayer: 'Red',
            gameOver: 3,
            inCheck: 3,
            positionToPieces: []
        },

        urlRoot: function () {
            return "/api/chess";
        }

    });

    return GameStateModel;
})
