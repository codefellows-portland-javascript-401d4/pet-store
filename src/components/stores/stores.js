import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller
};

controller.$inject = ['storeService'];

function controller(stores) {

  this.styles = styles;

  this.loading = true;

  stores.getAll().then(stores => {
    this.stores = stores;
  });

  this.add = store => {
    stores.add(store)
    .then(saved => {
      this.stores.push(saved);
    });
  };

  this.new = () => {
    this.viewNew = true;
    this.viewDetail = false;
  };

  this.detail = () => {
    this.viewDetail = true;
    this.viewNew = false;
  };

}
