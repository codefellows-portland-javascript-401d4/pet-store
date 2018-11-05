'use strict';

var _welcomePage = require('./welcome-page');

var _welcomePage2 = _interopRequireDefault(_welcomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('My Pet Store App', function () {

    var welcome = new _welcomePage2.default();

    it('should have a title', function () {
        welcome.get();
        expect(welcome.title).toEqual('Pet Store!');
    });

    describe('navigation', function () {

        beforeEach(function () {
            welcome.get();
        });

        it('default to welcome page, and navigate to gallery', function () {

            expect(welcome.url).toBe('/');
            expect(welcome.stateComponent).toEqual('welcome');

            welcome.goToGallery();

            expect(welcome.url).toBe('/stores/all');
            expect(welcome.stateComponent).toEqual('stores');
        });
    });
});