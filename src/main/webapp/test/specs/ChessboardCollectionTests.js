define([
    '../../models/SquareModel',
    '../../collections/ChessboardCollection',
    'ServerMock',

    'test/fixtures/ChessMovesApi'
], function(
    Square,
    Chessboard,

    fixtures
) {
    describe("The Chessboard", function() {
        var board;


        beforeEach(function() {
            board = new Chessboard();

        });

        it("should be an object", function() {
            expect(board).toBeDefined();
        });

        it("should contain 64 squares", function(){
            expect(board.length).toBe(64);
        });

        it("should have 32 light squares and 32 dark squares", function() {
            expect(board.where({color: false}).length).toBe(32);
            expect(board.where({color: true}).length).toBe(32);
        });

    });


});