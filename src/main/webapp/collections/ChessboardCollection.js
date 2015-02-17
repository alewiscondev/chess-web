define([
        'backbone',
        'models/SquareModel'
    ],
    function (
        Backbone,
        Square
    ) {
        var MovesCollection = Backbone.Collection.extend({

            model: Square,

            initialize: function() {
                var square;
                var color = true;

                for (var i = 8; i >= 1; i--) {
                    color = !color;
                    for (var j = 1; j <= 8; j++) {
                        square = new Square({'col': String.fromCharCode(j + 96), row: i, color: color});
                        this.push(square);
                        color = !color;
                    }
                }
            }

        });

        return MovesCollection;
    });