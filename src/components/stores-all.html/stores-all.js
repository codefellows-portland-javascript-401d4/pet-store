import template from './stores-all.html';

export default {
  template,
  bindings: {
    stores:'<'
  },
  controller,
  controllerAs: '$storesAll'
};

controller.$inject = ['storeService'];

function controller() {

}