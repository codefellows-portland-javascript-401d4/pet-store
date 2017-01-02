import template from './all-stores.html';
import styles from './all-stores.scss';

export default {
  template,
  controller,
  bindings: {
    storesList: '<'
  }
};

controller.$inject = ['$state'];

function controller($state) {
  this.styles = styles;

  this.gotoStore = (id) => {
    $state.go('store.pets', {id});
  };
}
