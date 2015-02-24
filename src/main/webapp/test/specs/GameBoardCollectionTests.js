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

        gameBoard = new GameBoard();
        gameState = new GameState();
        possibleMoves = new Moves();

        serverMock.add({
            method: "GET",
            url: gameState.url(),
            response: stateFixtures.initialBoardState
        });
        serverMock.add({
            method: "GET",
            url: possibleMoves.url(),
            response: movesFixtures.initialMoves
        });

        serverMock.fetchAndWait(gameState);
        serverMock.fetchAndWait(possibleMoves);


        it("should be an object", function() {
            expect(1).toBe(2);
        });


    });


});