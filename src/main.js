import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
// import defaultRoute from 'angular-ui-router-default';
import routes from './routes'; 
import defaultRoute from 'angular-ui-router-default';

const app = angular.module('myApp', [components, services, uiRouter, defaultRoute]);

app.config(routes);

//route debugger
app.run(function($rootScope) {
	$rootScope.$on('$stateChangeError', console.log.bind(console));
});

app.value('apiUrl', 'https://pet-store-401.herokuapp.com/api/unauth');