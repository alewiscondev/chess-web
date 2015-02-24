define([
    'backbone'
], function (
    Backbone

) {
    var SquareModel = Backbone.Model.extend({

        defaults: {
            col: 'i',
            row: '9',
            color: 3,
            piece: '',
            selected: false,
            possibleToMove: false
        }

    });

    return SquareModel;
});
