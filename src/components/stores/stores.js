import template from './stores.html';

export default {
  template,
  controller,
  controllerAs: '$stores'
};

controller.$inject = ['storeService'];

function controller(stores) {

  stores.getAll().then(stores => {
    this.stores = stores;
  });

}