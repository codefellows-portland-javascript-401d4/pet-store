import template from './page-root-header.html';
import styles from './page-root-header.scss';

export default {
    template,
    transclude: {
        links: '?headerLinks',
        custom: '?headerCustom' 
    },
    controller
};

function controller() {
    this.styles = styles;
}