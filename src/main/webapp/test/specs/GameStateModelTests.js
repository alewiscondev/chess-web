define([
    '../../models/GameStateModel',
    'ServerMock',

    'test/fixtures/ChessApi'
], function(
    GameState,
    serverMock,

    fixtures
    ) {
    describe("The GameState", function() {
        var board;

        describe("when in the initial state", function() {

            beforeEach(function(done) {
                board = new GameState();

                serverMock.add({
                    method: "POST",
                    url: board.url(),
                    response: fixtures.initialBoardState
                });

                serverMock.saveAndWait(board, done);
            });

            it("should be an object", function() {
                expect(board).toBeDefined();
            });

            it("starts with white as the first player", function() {
                expect(board.get('currentPlayer')).toBe('White');
            });

            it("should not be in check", function() {
                expect(board.get('currentPlayer')).toBe('White');
            });

            it("should not be game over", function() {
                expect(board.get('gameOver')).toBe(false);
            });

            it("should have 32 pieces on the board", function() {
                expect(Object.keys(board.get('positionToPieces')).length).toBe(32);
            });

            it("should only accept moves in the possible moves list", function() {


            });
        });

        describe("when Black is in check", function() {

            beforeEach(function(done) {
                board = new GameState();

                serverMock.add({
                    method: "GET",
                    url: board.url(),
                    response: fixtures.boardInCheckState
                });

                serverMock.fetchAndWait(board, done);
            });

            it("should have black as the current player", function() {
                expect(board.get('currentPlayer')).toBe('Black');
            });

            it("should show as in check", function() {
                expect(board.get('inCheck')).toBe(true);
            });

            it("should not be in game over", function() {
                expect(board.get('gameOver')).toEqual(false);
            });
        });

        describe("when White is in checkmate", function() {

            beforeEach(function(done) {
                board = new GameState();

                serverMock.add({
                    method: "GET",
                    url: board.url(),
                    response: fixtures.boardInCheckmateState
                });

                serverMock.fetchAndWait(board, done);
            });

                it("should have white as the current player", function() {
                    expect(board.get('currentPlayer')).toBe('White');
                });

                it("should show as in check", function() {
                    expect(board.get('inCheck')).toBe(true);
                });

                it("should show as game over", function() {
                    expect(board.get('gameOver')).toEqual(true);
                });
        });

        describe("after a move", function() {

            beforeEach(function(done) {
                board = new GameState();

                serverMock.add({
                    method: "GET",
                    url: board.url(),
                    response: fixtures.boardAfterMove
                });

                serverMock.fetchAndWait(board, done);
            });

            it("should toggle the current player", function() {
                expect(board.get('currentPlayer')).toBe("White");
            });

            // Moving boardInCheckState kind to b1
            it("should have the piece on the new square", function() {
                expect(board.get('positionToPieces').b1).toBeDefined();
            });
        });


    });
});