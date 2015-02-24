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

        className: function () {
            var classNames = 'square';

            if(this.model.get('color')) {
                classNames += ' colored';
            }

            if(this.model.get('possibleToMove')) {
                classNames += ' destination'
            }
            return classNames;
        },


        id: function() {
            return this.model.get('col') + this.model.get('row');
        },

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
            if (this.model.get('row') === 1) {
                helpers.xaxis = true;
            }
            if (this.model.get('col') === 'a') {
                helpers.yaxis = true;
            }
            if (this.model.get('piece')) {
                helpers.pieceAt = this.model.get('piece')['owner'] + this.model.get('piece')['type'];
            }
            return helpers;
        }

    });

    return SquareView;
})