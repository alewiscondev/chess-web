define([
        'backbone',
        'models/SquareModel',
        'models/GameStateModel',
        'when'
    ],
    function (
        Backbone,
        Square,
        GameState,
        when
    ) {
        var MovesCollection = Backbone.Collection.extend({

            model: Square,

            initialize: function() {
                //this.gameState = new GameState();
                //this.gameState.fetch().then(this.createSquares());
                var gameState = new GameState();
                var self = this;
                this.fetchGameState(gameState).then(function (gameState) {
                    self.createSquares(gameState);
                });

            },

            createSquares: function(gameState) {

                var square;
                var colrow;
                var color = true;

                for (var i = 8; i >= 1; i--) {
                    color = !color;
                    for (var j = 1; j <= 8; j++) {
                        square = new Square({'col': String.fromCharCode(j + 96), row: i, color: color});
                        colrow = String.fromCharCode(j + 96) + i;
                        if (gameState.isPieceAt(colrow)) {
                            square.set('piece', gameState.get('positionToPieces')[colrow]);
                        }
                        this.push(square);
                        color = !color;
                    }
                }
            },

            fetchGameState: function(gameState) {
                var d = when.defer();
                gameState.fetch({success: function(gameState) {
                    d.resolve(gameState);
                }});

                return d.promise;
            }

        });

        return MovesCollection;
    });