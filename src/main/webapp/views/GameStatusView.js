define([
    'jquery',
    'backbone',
    'marionette',
    'text!templates/GameStatusTemplate.hbs',
    'handlebars'
], function($, Backbone, Marionette, GameStatusTemplate, Handlebars) {


    var GameStatusView = Backbone.Marionette.ItemView.extend({

        template: Handlebars.compile(GameStatusTemplate),

        initialize: function(options) {
            this.gameState = this.options.gameState;
            this.listenTo(this.gameState, 'change:currentPlayer', this.currentPlayerSetter);
            this.listenTo(this.gameState, 'change:inCheck', _.debounce(this.check, 100));
        },

        currentPlayerSetter: function() {
            this.currentPlayer = this.gameState.get('currentPlayer');
            this.render();
        },

        check: function() {
            if (this.gameState.get('gameOver')) {
                var losingPlayer = this.gameState.get('currentPlayer');
                var winningPlayer;
                if (losingPlayer === 'White') {
                    winningPlayer = 'Black'
                } else {
                    winningPlayer = 'White';
                }
                alert(winningPlayer + ' wins!');
                return;
            }
            if (this.gameState.get('inCheck')) {
                var playerInCheck = this.gameState.get('currentPlayer');
                alert(playerInCheck + ' in check!');

            }
        },

        templateHelpers: function() {
            var helpers = {};
            if (this.currentPlayer === 'White') {
                helpers.isWhite = true;
                helpers.isBlack = false;
            } else {
                helpers.isWhite = false;
                helpers.isBlack = true;
            }

            return helpers;
        }

    });

    return GameStatusView;
})