define([
        'backbone',
        'models/SquareModel'
    ],
    function (
        Backbone,
        Square


    ) {
        var GameBoardCollection = Backbone.Collection.extend({

            model: Square,

            currentSelected: '',

            possibleMoves: '',

            initialize: function () {
                this.createBoard();
                this.listenTo(this, 'change:selected', this.selectSquare);
            },

            selectSquare: function(options) {
                // if the selected square is a move from the previously selected square move it
                if (this.findWhere({possibleToMove: true, col: options.get('col'), row: options.get('row')})) {
                    this.movePiece(options);
                }
                // else clear out the previously highlighted moves
                var oldPossibleToMove = this.where({possibleToMove: true});
                for (i in oldPossibleToMove) {
                    oldPossibleToMove[i].set({possibleToMove: false});
                }
                //then set the new highlights
                this.currentSelected = options.get('col') + options.get('row');
                this.highlightSquares();
            },

            setPiecesInitial: function(gameState, possibleMoves) {
                this.possibleMoves = possibleMoves;
                this.gameState = gameState;
                var positions = gameState.get('positionToPieces');
                for (i in positions) {
                    this.findWhere({col: i.charAt(0), row: parseInt(i.charAt(1))}).set({piece: positions[i]});
                }
            },

            updatePossibleMoves: function(possibleMoves) {
                this.possibleMoves = possibleMoves;
                // Find what squares have a piece
                var oldPiecePositions = this.filter(function(square) {
                    if (square.get('piece')) {
                        return square;
                    }
                });
                var positions = this.gameState.get('positionToPieces');
                for (i in oldPiecePositions) {
                    var colToCheck = oldPiecePositions[i].get('col');
                    var rowToCheck = oldPiecePositions[i].get('row');
                    var isPieceThere = positions[colToCheck + rowToCheck];
                    if (isPieceThere === undefined) {
                        this.findWhere({col: colToCheck, row: rowToCheck}).set('piece', '');
                    }
                }
                for (i in positions) {
                    this.findWhere({col: i.charAt(0), row: parseInt(i.charAt(1))}).set({piece: positions[i]});
                }

            },

            highlightSquares: function() {
                var movesFromSquare = this.possibleMoves.getMovesFromSquare(this.currentSelected);

                for (i in movesFromSquare) {
                    this.findWhere({col: movesFromSquare[i].charAt(0), row: parseInt(movesFromSquare[i].charAt(1))}).set({possibleToMove: true});
                }
            },

            // creates an 8x8 board of squares, SQUARES DO NOT YET HAVE ANY PIECE INFO
            createBoard: function() {
                var square;
                var colrow;
                var color = true;
                for (var i = 8; i >= 1; i--) {
                    color = !color;
                    for (var j = 1; j <= 8; j++) {
                        square = new Square({'col': String.fromCharCode(j + 96), row: i, color: color});
                        colrow = String.fromCharCode(j + 96) + i;
                        this.push(square);
                        color = !color;
                    }
                }
            },

            movePiece: function(destination) {
                var origin = this.currentSelected;
                var destination = destination.get('col') + destination.get('row');
                this.gameState.get('positionToPieces')[destination] = this.gameState.get('positionToPieces')[origin];
                delete this.gameState.get('positionToPieces')[origin];
                this.gameState.save(null, {type: 'PUT'});

            }

        });

        return GameBoardCollection;
    });