define([
    '../../models/MovesModel',
    'ServerMock',

    'test/fixtures/ChessMovesApi'
], function(
    Moves,
    serverMock,

    fixtures
) {
    describe("The Moves", function() {
        var possibleMoves;

        describe("when in the initial state", function() {

            beforeEach(function(done) {
                possibleMoves = new Moves();

                serverMock.add({
                    method: "GET",
                    url: possibleMoves.url(),
                    response: fixtures.initialMoves
                });

                serverMock.fetchAndWait(possibleMoves, done);
            });

            it("should be an object", function() {
                expect(possibleMoves).toBeDefined();
            });

            it("should have 20 possible moves", function() {
                expect(possibleMoves.possibleMoves.length).toBe(20);
            });

            it("should have 2 moves from the 10 different moveable pieces", function() {
                var initialMoveable = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', 'b1', 'g1'];

                for (origin in initialMoveable) {
                    var moveableSquares = possibleMoves.getMovesFromSquare(initialMoveable[origin]);
                    expect(moveableSquares.length).toBe(2);
                }
            });

        });

    });
});