define([
    'marionette',
    'views/AppView',
    'models/GameStateModel',
    'collections/GameBoardCollection',
    'models/MovesModel',
    'when'
], function (Marionette, AppView, GameState, GameBoard, PossibleMoves, when) {
    'use strict';

    return Marionette.Application.extend({
        regions: {
            main: '#content'
        },

        initialize: function () {
            this.gameState = new GameState();
            this.possibleMoves = new PossibleMoves();
            this.gameBoard = new GameBoard(null, {gameState: this.gameState});

        },

        onStart: function() {
            this.initializeFromServer();
            this.getRegion('main').show(new AppView({
                gameState: this.gameState,
                gameBoard: this.gameBoard
            }));

        },

        initializeFromServer: function () {
            var self = this;
            when.all([this.gameState.fetch(), this.possibleMoves.fetch()]).then(function () {
                self._updateGameBoard();
                self.listenTo(self.gameState, 'sync', self.updateFromServer);


            });
        },

        updateFromServer: function () {
            var self = this;
            when.all([this.possibleMoves.fetch()]).then(function () {
                self._updatePossibleMoves();
            });
        },

        _updateGameBoard: function () {
            this.gameBoard.setPiecesInitial(this.gameState, this.possibleMoves);
        },

        _updatePossibleMoves: function() {
            this.gameBoard.updatePossibleMoves(this.possibleMoves);
        }

    });
});