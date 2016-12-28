import template from './app.html';
import './app.scss';

export default {
  template,
  controller,
  controllerAs: '$app'
};

controller.$inject = ['$state'];

function controller($state) {
  console.log($state);
}