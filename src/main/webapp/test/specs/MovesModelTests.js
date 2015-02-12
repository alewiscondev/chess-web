define([
    '../../models/MoveModel',
    '../../collections/MovesCollection',
    'ServerMock',

    'test/fixtures/ChessMovesApi'
], function(
    Move,
    Moves,
    serverMock,

    fixtures
) {
    describe("The Moves", function() {
        var move;
        var moves;

        describe("on a new game board", function() {

            beforeEach(function(done) {
                moves = new Moves();

                serverMock.add({
                    method: "GET",
                    url: moves.url(),
                    response: fixtures.initialMoves
                });
                serverMock.fetchAndWait(moves, done);
            });

            it("should be an object", function() {
                expect(moves).toBeDefined();
            });

            it("should have 20 possible moves", function(){
                expect(moves.length).toBe(20);
            });

        });


    });
});