define([
    'jquery',
    'backbone',
    'marionette',
    'handlebars',
    'views/SquareView',
    'models/GameStateModel'
], function($, Backbone, Marionette, Handlebars, SquareView) {


    var BoardView = Backbone.Marionette.CollectionView.extend({

        childView: SquareView,

        id: 'squares'


    });

    return BoardView;
});