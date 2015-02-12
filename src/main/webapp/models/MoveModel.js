define([
    'backbone'
], function (
    Backbone

) {
    var MoveModel = Backbone.Model.extend({

        defaults: {
            ordest: ''
        },

        initialize: function(data) {
            this.set('ordest', data.origin + data.destination);
        }
    });

    return MoveModel;
})
