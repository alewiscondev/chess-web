define([
    '../../App'

], function(
    App

) {
    describe("The App", function() {
        var app;


        beforeEach(function() {
            app = new App();
            var el = document.createElement('div');
            el.id = 'content';
            document.body.appendChild(el);
        });

        afterEach(function() {
            var oldChild = document.getElementById('content');
            document.body.removeChild(oldChild);
        })

        it("Should fetch and update game state and possible moves on initialize", function() {
            spyOn(app.gameState, 'fetch');
            spyOn(app.possibleMoves, 'fetch');
            app.start();
            expect(app.gameState.fetch).toHaveBeenCalled();
            expect(app.possibleMoves.fetch).toHaveBeenCalled();
        });

        it("Should fetch and update the possible moves on updateFromServer", function() {
            spyOn(app.gameState, 'fetch');
            spyOn(app.possibleMoves, 'fetch');
            app.updateFromServer();
            expect(app.gameState.fetch).not.toHaveBeenCalled();
            expect(app.possibleMoves.fetch).toHaveBeenCalled();
        });


    });


});