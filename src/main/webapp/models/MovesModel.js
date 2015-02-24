define([
    'backbone'
], function (
    Backbone

) {
    var MovesModel = Backbone.Model.extend({

        urlRoot: function () {
            return "/api/chess/moves";
        },

        parse: function(data) {
            this.possibleMoves = data;
            return data;
        },

        getMovesFromSquare: function(colrow) {
            var moves = [];
            for (i in this.possibleMoves) {
                if (this.possibleMoves[i].origin === colrow) {
                    moves.push(this.possibleMoves[i].destination);
                }
            }
            return moves;
        }

    });

    return MovesModel;
});
