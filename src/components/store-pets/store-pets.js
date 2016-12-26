import template from './store-pets.html';

export default {
  template,
  bindings: {
    store: '<'
  },
  controller,
  controllerAs:'$storePets'
};

controller.$inject = ['$state'];

function controller() {


}