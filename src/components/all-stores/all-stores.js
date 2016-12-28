import template from './all-stores.html';
import styles from './all-stores.scss';

export default {
    template,
    bindings: {
        stores: '<',
    },
    controller
};

controller.$inject = ['$state'];

function controller($state) {
    this.styles = styles;

    this.goToAdd = () => {
        $state.go('stores.add');
    };
    
}
