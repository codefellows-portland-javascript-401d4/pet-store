import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  bindings: {
    stores: '<',
  },
  controller
};

controller.$inject = ['storeService', '$state'];
function controller(stores, $state) {

  this.styles = styles;

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