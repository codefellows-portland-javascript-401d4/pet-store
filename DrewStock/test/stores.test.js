//
// describe('stores component', () => {
//   const {assert} = chai;
//
//   angular.mock.module.sharedInjector();
//
//   before(angular.mock.module('components'));
//
//   let $component = null;
//
//   before(angular.mock.inject($componentController => {
//     $component = $componentController;
//   }));
//
//   describe('create component', () => {
//
//     const stores = [ {name: 'Store One'}, {name: 'Store 2'}
//     ];
//
//     const store = {name: 'Test Store'};
//
//     const storeService = {
//       getAll() {
//         return Promise.resolve(stores);
//       },
//       add(store) {
//         return Promise.resolve(store);
//       }
//     };
//
//     let component = null;
//
//     before(() => {
//       component = $component('stores', {storeService});
//     });
//
//     it('loads stores', done => {
//
//       assert.isOk(component.loading);
//
//       setTimeout(() => {
//         assert.equal(component.stores, stores);
//         assert.isNotOk(component.loading);
//         done();
//       });
//     });
//
//     it('add a store', done => {
//
//       component.add(store);
//
//       setTimeout(() => {
//         assert.equal(stores.length, 3);
//         assert.equal(stores[2], store);
//         done();
//       });
//     });
//
//
//   });
//
// });
