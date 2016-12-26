import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller
};

controller.$inject = ['storeService', '$state'];

function controller(stores, $state) {

  this.styles = styles;

  this.loading = true;

  stores.getAll().then(stores => {
    // this.loading = false;
    this.stores = stores;
  });

  this.add = store => {
    stores.add(store)
    .then(saved => {
      this.stores.push(saved);
    });
  };

  this.new = () => {
    $state.go('stores.add');
    this.viewNew = true;
    this.viewDetail = false;
  };

  this.detail = () => {
    this.viewDetail = true;
    this.viewNew = false;
  };

}
