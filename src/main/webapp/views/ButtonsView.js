define([
    'jquery',
    'backbone',
    'marionette',
    'text!templates/ButtonsViewTemplate.hbs',
    'handlebars',
], function($, Backbone, Marionette, ButtonsViewTemplate, Handlebars) {


    var ButtonsView = Backbone.Marionette.ItemView.extend({

        template: Handlebars.compile(ButtonsViewTemplate),

        events: {
            "click #newGame": "foo"
        },

        foo: function() {
            alert("HELLO WORLD")
        }

    });

    return ButtonsView;
})