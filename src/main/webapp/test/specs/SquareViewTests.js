define([
    '../../views/SquareView',
    '../../models/SquareModel'
], function(
    SquareView,
    Square
) {
    describe("The SquareView", function() {
        var sview;
        var square;

        describe("for all squares", function() {
            beforeEach(function() {
                square = new Square({
                    col: 'a',
                    row: '2',
                    color: false,
                    piece: 'p',
                    selected: false,
                    possibleToMove: false
                });

                var el = document.createElement('div');
                el.id = 'squares';
                document.body.appendChild(el);
                sview = new SquareView({model: square, el: '#squares'});
            });

            afterEach(function() {
                square.destroy();
                sview.remove();
            });

            it("should have square in the class name", function() {
                sview.render();
                expect(sview.el.classList.toString()).toContain('square');
            });

            it("should rerender upon a piece change", function() {
                spyOn(sview, "render");
                square.set({piece: 'q'});
                expect(sview.render).toHaveBeenCalled();
            });
        })

        describe("when colored", function() {
            beforeEach(function() {
                square = new Square({color: true});

                var el = document.createElement('div');
                document.body.appendChild(el);
                sview = new SquareView({model: square});
            });

            afterEach(function() {
                square.destroy();
                sview.remove();
            });

            it("should have color in the class names", function() {
                expect(sview.el.classList.toString()).toContain('colored');
            });
        })

    });
});