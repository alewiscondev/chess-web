define([
    'jquery',
    'backbone',
    'marionette',
    'text!AppViewTemplate',
    'handlebars'
], function($, Backbone, Marionette, AppViewTemplate, Handlebars) {


    var AppView = Backbone.Marionette.LayoutView.extend({

        template: Handlebars.compile(AppViewTemplate),


       // initialize: function()  { debugger; }
    });

    return AppView;
})