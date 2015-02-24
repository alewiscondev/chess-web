define([
    '../../models/SquareModel'

], function(
    Square

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

        it("should have a piece property", function(){
            expect(square.get('piece')).toBeDefined();
        });

        it("should have a selected property that defaults to false", function(){
            expect(square.get('selected')).toBeDefined();
            expect(square.get('selected')).toBe(false);

        });

        it("should have a possibleToMove property that defaults to false", function(){
            expect(square.get('possibleToMove')).toBeDefined();
            expect(square.get('possibleToMove')).toBe(false);
        });

    });


});