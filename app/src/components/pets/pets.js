
import template from './pets.html';

export default {
  template,
  controller,
  bindings: {
    pets: '<'
  }
};

function controller() {
  console.log('In pets controller');
}