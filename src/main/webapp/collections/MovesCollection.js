define([
    'backbone',
    'models/MoveModel'
],
function (
    Backbone,
    Move
) {
    var MovesCollection = Backbone.Collection.extend({

        model: Move,

        url: function() {
            return "api/chess/moves";
        }
    });

    return MovesCollection;
});