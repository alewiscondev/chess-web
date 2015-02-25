define([
    '../../views/GameStatusView',
    '../../models/GameStateModel',
    'ServerMock',

    'test/fixtures/ChessApi'
], function(
    GameStatusView,
    GameState,
    serverMock,

    fixtures
) {
    describe("The GameStatus", function() {
        var gsview;
        var gameState;
        beforeEach(function(done) {
            gameState = new GameState({currentPlayer: 'White', inCheck: false, gameOver: false});

            serverMock.add({
                method: "GET",
                url: gameState.url(),
                response: fixtures.initialBoardState
            });
            serverMock.fetchAndWait(gameState, done);

            var el = document.createElement('div');
            document.body.appendChild(el);
            gsview = new GameStatusView({el: el, gameState: gameState});
        });

        afterEach(function() {
            gameState.destroy();
            gsview.remove();
        });

        it("Should stay in sync with the gamestate's current player", function() {
            gameState.set({currentPlayer: 'Black'});
            expect(gsview.currentPlayer).toBe('Black');
        });

    });
});