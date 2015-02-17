define([
    '../../models/SquareModel',
    'ServerMock',

    'test/fixtures/ChessMovesApi'
], function(
    Square,
    serverMock,

    fixtures
) {
    describe("The Square", function() {
        var square;


        beforeEach(function() {
            square = new Square();

        });

        it("should be an object", function() {
            expect(square).toBeDefined();
        });

        it("should have a column", function(){
            expect(square.get('col')).toBeDefined();
        });

        it("should have a row", function(){
            expect(square.get('row')).toBeDefined();
        });

        it("should have a color property", function(){
            expect(square.get('color')).toBeDefined();
        });

    });


});