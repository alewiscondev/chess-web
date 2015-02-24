define([
    'backbone'
], function (
    Backbone

) {
    var SquareModel = Backbone.Model.extend({

        defaults: {
            col: '',
            row: '',
            color: '',
            piece: '',
            selected: false,
            possibleToMove: false
        }

    });

    return SquareModel;
});
