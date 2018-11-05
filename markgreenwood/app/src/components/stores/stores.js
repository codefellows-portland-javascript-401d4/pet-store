import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  bindings: {
    storesList: '<'
  },
  controller
};

controller.$inject = [ 'storeService', '$state' ];

function controller(storeService, $state) {

  this.styles = styles;

  this.add = (store) => {
    this.loading = true;
    storeService.add(store)
      .then(saved => {
        this.loading = false;
        this.storesList.push(saved);
        $state.go('store.pets', { id: saved._id });
      });
  };
}