import template from './stores-store-addpet.html';
import styles from './stores-store-addpet.scss';

export default {
  template,
  require: {
    parent: '^storesStore'
  },
  controller

};

function controller() {
  this.styles = styles;

  console.log('IN ADD PETS');
  this.pets = ['cat', 'lizard', 'bird', 'dog', 'fish'];
  this.reset = () => {
    this.name = '';
    this.animal = '';

  };

  this.reset();

  this.addpet = () => {
    this.parent.addPet({
      name: this.name, 
      animal: this.animal,
      store: this.parent.store._id 

    });
  };
  
  this.scratch = () => {
    this.parent.cancel();

  };
}
