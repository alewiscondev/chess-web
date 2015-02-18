define([
    'jquery',
    'backbone',
    'marionette',
    'handlebars',
    'views/SquareView'
], function($, Backbone, Marionette, Handlebars, SquareView) {


    var BoardView = Backbone.Marionette.CollectionView.extend({

        childView: SquareView,

        id: 'squares',

        initialize: function() {
        }
    });

    return BoardView;
});