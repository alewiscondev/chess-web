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
                square = new Square();

                var el = document.createElement('div');
                document.body.appendChild(el);
                spyOn(SquareView.prototype, 'render').and.callThrough();
                spyOn(SquareView.prototype, 'selectSquare').and.callThrough();
                sview = new SquareView({model: square, el: el});
            });

            afterEach(function() {
                square.destroy();
                sview.remove();
            });

            it("should respond to a click by changing the selected attribute of the model", function() {
                sview.render();
                sview.$el.click();
                expect(SquareView.prototype.selectSquare).toHaveBeenCalled();
                expect(square.get('selected')).toBe(true);

            });

            it("should rerender upon a piece change", function() {
                square.set('piece', 'q');
                expect(SquareView.prototype.render).toHaveBeenCalled();
            });

            //Possible to move would mean the selected piece is able to move to this square
            it("should rerender upon a possible to move change", function() {
                square.set('possibleToMove', true);
                expect(SquareView.prototype.render).toHaveBeenCalled();
            });

            it("should rerender upon a select change", function() {
                square.set('selected', true);
                expect(SquareView.prototype.render).toHaveBeenCalled();
            });
        });

        describe("when there is a piece at", function() {

            it("should have pieceAt in the class names", function() {
                square = new Square({piece: 'q'});

                var el = document.createElement('div');
                document.body.appendChild(el);
                sview = new SquareView({model: square, el: el});
                sview.render();
                expect(sview.el.children[0].children[0].classList.toString()).toContain('pieceAt');
                square.destroy();
                sview.remove();
            });
        });

        describe("when colored", function() {

            it("should have color in the class names", function() {
                square = new Square({color: true});

                var el = document.createElement('div');
                document.body.appendChild(el);
                sview = new SquareView({model: square, el: el});
                sview.render();
                expect(sview.el.children[0].classList.toString()).toContain('colored');
                square.destroy();
                sview.remove();
            });
        });

        describe("when is a possible destination", function() {

            it("should have destination in the class names", function() {
                square = new Square({possibleToMove: true});

                var el = document.createElement('div');
                document.body.appendChild(el);
                sview = new SquareView({model: square, el: el});
                sview.render();
                expect(sview.el.children[0].classList.toString()).toContain('destination');
                square.destroy();
                sview.remove();
            });
        });

    });
});