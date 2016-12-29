import template from './app.html';
import styles from './app.scss';
export default {
	template,
	// bindings: { 
	// 	success: '<' 
	// },
	controller
};

controller.$inject = ['userService'];

function controller(userService) {
	this.styles = styles;
	this.logout = () => userService.logout();
	this.isAuthenticated = () => userService.isAuthenticated();
}
