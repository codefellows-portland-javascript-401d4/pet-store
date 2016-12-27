import template from './store-pets.html';

export default {
  template,
  bindings: {
    store: '<',
    pets: '<'
  },
  controller,
  controllerAs:'$storePets'
};

controller.$inject = ['$state'];

function controller() {


}