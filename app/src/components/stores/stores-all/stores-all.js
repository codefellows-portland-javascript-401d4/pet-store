import template from './stores-all.html';
import styles from './stores-all.scss';

export default {
  template,
  bindings: {
    storesList: '<'
  },
  controller
};

controller.$inject = [ '$state' ];

function controller($state) {
  this.styles = styles;

  this.gotoStore = (id) => {
    $state.go('store.pets', { id });
  };
}