'use strict';

var _homePage = require('./home-page');

var _homePage2 = _interopRequireDefault(_homePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('My pet store app', function () {

  var home = new _homePage2.default();

  it('App should have a title', function () {
    home.get();
    expect(home.title).toEqual('Pet store');
  });

  describe('App navigation', function () {

    beforeEach(function () {
      home.get();
    });

    it('Defaults to home page', function () {

      expect(home.url).toBe('/');
      expect(home.stateComponent).toEqual('welcome');
    });

    it('Navigates to /stores', function () {

      var nav = element.all(by.css('nav a'));
      expect(nav.get(1).getText()).toBe('Stores');

      nav.get(1).click();

      expect(home.url).toBe('/stores/all');
      expect(home.stateComponent).toEqual('stores');
    });
  });
});