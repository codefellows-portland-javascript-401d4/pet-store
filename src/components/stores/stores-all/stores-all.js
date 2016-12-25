import template from './stores-all.html';
import styles from './stores-all.scss';

export default {
    template,
    bindings: {
        stores: '<'
    },
    controller
};

controller.$inject = ['$state'];

function controller($state) {
    this.styles = styles;

    this.toNewForm = () => {
        $state.go('stores.add');
    };
};