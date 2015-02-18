define([
    'jquery',
    'backbone',
    'marionette',
    'text!templates/SquareTemplate.hbs',
    'handlebars'
], function($, Backbone, Marionette, SquareTemplate, Handlebars) {


    var SquareView = Backbone.Marionette.ItemView.extend({
        className: function () {
            var classNames = 'square';

            if(this.model.get('color')) {
                classNames += ' colored';
            }

            return classNames;
        },

        id: function() {
            return this.model.get('col') + this.model.get('row');
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