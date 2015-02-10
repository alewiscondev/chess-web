define([
    'models/ChessboardModel',
    'ServerMock',

    'test/fixtures/ChessApi'
], function(
    Chessboard,
    serverMock,

    fixtures
    ) {
    describe("The Chessboard Model", function() {
        var board;

        beforeEach(function() {
            board = new Chessboard();
        });

        it("should initialize", function() {
            expect(board).toBeDefined();
            expect(board.get('currentPlayer')).toEqual('Red');
        });

        it("starts with white as the default player", function() {
            serverMock.add({
                method: "POST",
                url: board.url(),
                response: fixtures.initialBoardState
            });
            serverMock.saveAndWait(board, function() {
                expect(board.get('currentPlayer')).toEqual('White');
            });

        });

        it("can tell if the board when the board is in check", function() {
            serverMock.add({
                method: "POST",
                url: board.url(),
                response: fixtures.boardInCheckState
            });

            serverMock.saveAndWait(board, function() {
                expect(board.isInCheck()).toEqual(true);
            });

        });

    });
});