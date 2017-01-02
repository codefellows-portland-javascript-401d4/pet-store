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

  this.selectStore = (id) => {
    $state.select('store.pets', {id});
  };
}
