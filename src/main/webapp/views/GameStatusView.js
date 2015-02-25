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
            this.checkString = '';
            if (this.gameState.get('gameOver')) {
                var losingPlayer = this.gameState.get('currentPlayer');
                var winningPlayer;
                if (losingPlayer === 'White') {
                    winningPlayer = 'Black'
                } else {
                    winningPlayer = 'White';
                }
                this.checkString = winningPlayer + ' wins!';
                this.render();
                return;
            }
            if (this.gameState.get('inCheck')) {
                var playerInCheck = this.gameState.get('currentPlayer');
                this.checkString = playerInCheck + ' in check!';
                this.render();
                return;

            }
            this.render();
            return;
        },

        templateHelpers: function() {
            var helpers = {};

            if (this.checkString) {
                helpers.checkString = this.checkString;
            } else {
                helpers.checkString = '';
            }

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