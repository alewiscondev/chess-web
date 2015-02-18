define([
    '../../models/SquareModel',
    '../../collections/ChessboardCollection',
    'ServerMock',

    'test/fixtures/ChessMovesApi'
], function(
    Square,
    Chessboard,
    serverMock,

    fixtures
) {
    describe("The Chessboard", function() {
        var board;


        beforeEach(function() {

            spyOn(Chessboard, 'fetchGameState').and.callFake(function() {
                return {
                    "currentPlayer" : "Black",
                    "inCheck" : true,
                    "gameOver" : false,
                    "positionToPieces" : {
                        "a8" : {"owner" : "White", "type" : "q"},
                        "h8" : {"owner" : "White", "type" : "k"},
                        "a1" : {"owner" : "Black", "type" : "k"}
                    }
                };
            });

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