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
        },

        isPieceAt: function(colrow) {
            if (this.get('positionToPieces')[colrow]) {
                return true;
            }
            return false;
        }

    });

    return GameStateModel;
})
