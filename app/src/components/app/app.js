import template from './app.html';
// import styles from './app.scss';

export default {
  template,
  controller,
  controllerAs: 'app'   
};

controller.$inject = ['storeService'];

function controller(stores) {

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