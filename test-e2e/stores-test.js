'use strict';

var _storesPage = require('./stores-page');

var _storesPage2 = _interopRequireDefault(_storesPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stores = new _storesPage2.default();

describe('stores page', function () {

    it('should have a title', function () {
        stores.get();
        expect(stores.title).toBeOk;
    });
});