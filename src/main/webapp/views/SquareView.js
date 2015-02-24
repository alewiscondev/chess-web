define([
    'jquery',
    'backbone',
    'marionette',
    'text!templates/SquareTemplate.hbs',
    'handlebars'
], function($, Backbone, Marionette, SquareTemplate, Handlebars) {


    var SquareView = Backbone.Marionette.ItemView.extend({

        initialize: function() {
            this.listenTo(this.model, 'change:piece', this.render);
            this.listenTo(this.model, 'change:possibleToMove', this.render);
            this.listenTo(this.model, 'change:selected', this.render);
        },

        className: 'square',

        events: {
            'click': 'selectSquare'
        },

        selectSquare: function() {
            // toggles to trigger event in collection
            if (this.model.get('selected')) {
                this.model.set({selected: false})
            }
            this.model.set({selected: true})
        },

        template: Handlebars.compile(SquareTemplate),

        templateHelpers: function() {
            var helpers = {};
            if (this.model.get('piece')) {
                helpers.pieceAt = 'pieceAt ' + this.model.get('piece')['owner'] + this.model.get('piece')['type'];
            }
            if (this.model.get('color')) {
                helpers.colored = 'colored';
            }
            if (this.model.get('possibleToMove')) {
                helpers.destination = 'destination';
            }
            return helpers;
        }

    });

    return SquareView;
})