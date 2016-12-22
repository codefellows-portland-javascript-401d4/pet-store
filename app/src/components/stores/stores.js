import template from './stores.html';

export default {
  template,
  controller
};

controller.$inject = ['storeService', '$state'];
function controller(stores, $state) {

  stores.get().then(stores => {
    this.stores = stores;
  });

  this.add = store => {
    stores.add(store)
            .then(saved => {
              this.loading = false;
              this.stores.push(saved);
            });
  };
}