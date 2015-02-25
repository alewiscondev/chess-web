require.config({

    baseUrl: '../',

    paths: {
        'backbone' : 'lib/backbone',
        'underscore': 'lib/underscore',
        'jquery': 'lib/jquery',
        'marionette': 'lib/marionette',
        'text': 'lib/text',
        'handlebars': 'lib/handlebars',

        'jasmine': 'test/lib/jasmine',
        'jasmine-html': 'test/lib/jasmine-html',
        'boot': 'test/lib/boot',

        'ServerMock': 'test/lib/ServerMock',
        'sinon': 'test/lib/sinon',
        'expect': 'test/lib/expect'

    },

    packages: [
        { name: 'when', location: 'lib/when', main: 'when'}
    ],

    shim: {
        'jasmine': {
            exports: 'window.jasmineRequire'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'window.jasmineRequire'
        },
        'boot': {
            deps: ['jasmine', 'jasmine-html'],
            exports: 'window.jasmineRequire'
        },
        'ServerMock': {
            deps: ['sinon'],
            exports: 'ServerMock'
        },
        // TODO: get expect js working
        'expect': {
            exports: 'window.expect'
        }


    }
});

var specs = [
    'test/specs/GameStateModelTests',
    'test/specs/AppTests',
    'test/specs/SquareModelTests',
    'test/specs/MovesModelTests',
    'test/specs/GameBoardCollectionTests',
    'test/specs/ButtonsViewTests',
    'test/specs/SquareViewTests',
    'test/specs/GameStatusViewTests'


];

require(['boot'], function () {

    require(specs, function () {
        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
        window.onload();
    });
});


