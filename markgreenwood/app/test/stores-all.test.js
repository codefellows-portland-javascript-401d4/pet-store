describe ('stores-all component', () => {

  const { expect } = chai;

  const stores = [
    { id: 1, name: 'Store 1', city: 'Poughkeepsie', state: 'NY' },
    { id: 2, name: 'Store 2', city: 'Portland', state: 'OR' }
  ];

  // const store = {
  //   id: 3, name: 'Store 3', city: 'Seattle', state: 'WA'
  // };

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;
  let $state = {};

  beforeEach(angular.mock.inject(($componentController) => {
    $component = $componentController;
  }));

  // const storeService = {
  //   get(storeId) { // eslint-disable-line no-unused-vars
  //     return Promise.resolve(store);
  //   },
  //   getAll() {
  //     return Promise.resolve(stores);
  //   },
  //   add(store) {
  //     return Promise.resolve(store);
  //   }
  // };

  it ('displays a list of stores', (done) => {
    const component = $component('storesAll', { $state }, { storeList: stores });

    setTimeout(() => {
      expect(component.storeList).to.deep.equal(stores);
      done();
    });

  });

});