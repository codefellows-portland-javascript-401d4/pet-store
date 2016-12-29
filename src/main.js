import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import dialog from 'ng-dialog';
import resource from 'angular-resource';
// import 'ng-dialog/css/ngDialog.css';
// import 'ng-dialog/css/ngDialog-theme-default.css';

import http from './auth/http';
import routes from './routes'; 
import auth from './auth/auth';

// need this for old $stateChanged events,
// however, we need to manually grab the module 
// from angular (see below) as it is not 
// exported from this import 
import 'angular-ui-router/release/stateEvents';

const app = angular.module('myApp', [components, services, uiRouter, defaultRoute, angular.module('ui.router.state.events').name, resource, dialog]);

app.value('apiUrl', 'https://pet-store-401.herokuapp.com/api');

app.config(http);
app.config(routes);
app.run(auth);

//route debugger
app.run(function($rootScope) {
	$rootScope.$on('$stateChangeError', console.log.bind(console));
});

