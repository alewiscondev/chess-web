define([
    '../../collections/GameBoardCollection',
    '../../models/GameStateModel',
    '../../models/MovesModel',
    'ServerMock',

    'test/fixtures/ChessApi',
    'test/fixtures/ChessMovesApi'

], function(
    GameBoard,
    GameState,
    Moves,
    serverMock,

    stateFixtures,
    movesFixtures

) {
    describe("The GameBoard", function() {
        var gameBoard;
        var gameState;
        var possibleMoves;

        beforeEach(function(done) {
            gameBoard = new GameBoard();
            gameState = new GameState();
            possibleMoves = new Moves();

            serverMock.add({
                method: "GET",
                url: gameState.url(),
                response: stateFixtures.initialBoardState
            },
            {
                method: "GET",
                url: possibleMoves.url(),
                response: movesFixtures.initialMoves
            }
            );

            serverMock.fetchAndWait(gameState, function() {
                serverMock.fetchAndWait(possibleMoves, done);
            });
        });

        it("should have 64 squares", function() {
            expect(gameBoard.length).toBe(64);
        });

        it("should have 32 colored, 32 uncolored squares", function() {
            expect(gameBoard.where({color: true}).length).toBe(32);
            expect(gameBoard.where({color: false}).length).toBe(32);
        });

        describe("in the initial state", function() {

            beforeEach(function() {
                gameBoard.setPiecesInitial(gameState, possibleMoves);
            });

            //empty meaning no piece
            it ("should have 32 empty squares on the board", function() {
                expect(gameBoard.where({piece: ''}).length).toBe(32);
            });

            //this includes the highlight of a moveable piece and the unhighlight when clicking to an empty square
            it ("should select the piece of the square that is clicked on", function() {
                gameBoard.findWhere({col: 'a', row: 2}).set({selected: true});
                var highlightedSquares = gameBoard.where({possibleToMove: true});
                expect(highlightedSquares.length).toBe(2);
                expect(highlightedSquares[0].get('row')).toBe(4);
                expect(highlightedSquares[1].get('row')).toBe(3);

                gameBoard.findWhere({col: 'a', row: 5}).set({selected: true});
                var highlightedSquares = gameBoard.where({possibleToMove: true});
                expect(highlightedSquares.length).toBe(0);

            });

            it ("should move to a square that is clicked and able to be moved to", function() {
                spyOn(gameState, 'save');
                gameBoard.findWhere({col: 'a', row: 2}).set({selected: true});
                gameBoard.findWhere({col: 'a', row: 4}).set({selected: true});

                expect(gameState.get('positionToPieces').a2).toBeUndefined();
                expect(gameState.get('positionToPieces').a4).toBeDefined();
            });

        });




    });


});