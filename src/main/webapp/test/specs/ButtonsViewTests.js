define([
    '../../views/ButtonsView',
    '../../models/GameStateModel',
    'ServerMock',

    'test/fixtures/ChessApi'
], function(
    ButtonsView,
    GameState,
    serverMock,

    fixtures
) {
    describe("The Buttons", function() {
        var bview;
        var gameState;
        beforeEach(function(done) {
            gameState = new GameState();

            serverMock.add({
                method: "GET",
                url: gameState.url(),
                response: fixtures.initialBoardState
            });
            serverMock.fetchAndWait(gameState, done);

            var el = document.createElement('div');
            document.body.appendChild(el);
            bview = new ButtonsView({el: el, gameState: gameState});
        });

        afterEach(function() {
            gameState.destroy();
            bview.remove();
        });

        it("should respond to a click event on new game by posting to the gameState api", function() {
            spyOn(gameState, 'save');
            bview.render();
            bview.$('#newGame').click();
            expect(gameState.save).toHaveBeenCalled();
        });

    });
});