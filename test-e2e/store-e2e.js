'use strict';

var _storesPage = require('./stores-page');

var _storesPage2 = _interopRequireDefault(_storesPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Pet Store', function () {

	var stores = new _storesPage2.default();

	it('should have a title', function () {
		stores.get();
		expect(stores.title).toEqual('Mugsy\'s Pet Store');
	});

	describe('navigation', function () {

		beforeEach(function () {
			stores.get();
		});

		it('defaults to all stores', function () {

			expect(stores.url).toBe('/stores/all');
			expect(stores.stateComponent).toEqual('stores');
		});

		it('has an add pages', function () {

			stores.goToAddStore();

			expect(stores.url).toBe('/stores/add');
			expect(stores.stateComponent).toEqual('stores');
		});
	});
});