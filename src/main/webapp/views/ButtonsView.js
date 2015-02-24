define([
    'jquery',
    'backbone',
    'marionette',
    'text!templates/ButtonsViewTemplate.hbs',
    'handlebars',
], function($, Backbone, Marionette, ButtonsViewTemplate, Handlebars) {


    var ButtonsView = Backbone.Marionette.ItemView.extend({

        template: Handlebars.compile(ButtonsViewTemplate),

        events: {
            'click #newGame': 'newGame'
        },

        newGame: function() {
            this.options.gameState.save();
        }

    });

    return ButtonsView;
})