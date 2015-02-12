define([
    '../../views/AppView',
    '../../models/ChessboardModel',
    'ServerMock',

    'test/fixtures/ChessApi'
], function(
    AppView,
    Chessboard,
    serverMock,

    fixtures
) {
    describe("The AppView", function() {

        describe("on a new game board", function() {
            var board;
            var aview;

            beforeEach(function(done) {
                board = new Chessboard();
                aview = new AppView();

                serverMock.add({
                    method: "GET",
                    url: board.url(),
                    response: fixtures.initialBoardState
                });
                serverMock.fetchAndWait(board, done);
            });

            it("should contain a board", function() {
                expect(aview.find('#board')).toBeDefined();
            });

            it("should not show a game status", function() {
                expect(aview.find('#gameStatus')).toBeUndefined();
            });

            it("should have a new game button that starts a new game", function() {
                //TODO
            });

        });

        describe("when Black is in check", function() {
            var board;
            var aview;

            beforeEach(function(done) {
                board = new Chessboard();
                aview = new AppView();

                serverMock.add({
                    method: "GET",
                    url: board.url(),
                    response: fixtures.boardInCheckState
                });
                serverMock.fetchAndWait(board, done);
            });

            it("should contain a board", function() {
                expect(aview.find('#board')).toBeDefined();
            });

            it("should have game status show black as in check", function() {
                expect(aview.find('#gameStatus')).toBeDefined();
                expect(aview.find('#gameStatus')).toBe('Black is in check!');
            });

            it("should have a new game button that starts a new game", function() {
                //TODO
            });

        });

        describe("when White is in checkmate", function() {
            var board;
            var aview;

            beforeEach(function(done) {
                board = new Chessboard();
                aview = new AppView();

                serverMock.add({
                    method: "GET",
                    url: board.url(),
                    response: fixtures.boardInCheckmateState
                });
                serverMock.fetchAndWait(board, done);
            });

            it("should contain a board", function() {
                expect(aview.find('#board')).toBeDefined();
            });

            it("should have game status show white as in checkmate", function() {
                expect(aview.find('#gameStatus')).toBeDefined();
                expect(aview.find('#gameStatus')).toBe('Black is the winner!');
            });

            it("should have a new game button that starts a new game", function() {
                //TODO
            });



        });


    });
});