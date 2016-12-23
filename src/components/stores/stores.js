import template from './stores.html';
import styles from './stores.scss';

export default {
    template,
    controller
};

controller.$inject = ['$state'];


function controller($state) {
    this.styles = styles;

    this.setDisplay = name => {
        const parts = $state.current.name.split('.');
        parts[parts.length-1] = name;
        const newState  = parts.join('.');
        $state.go(newState);
    };

}


