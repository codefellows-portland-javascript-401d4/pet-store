import angular from 'angular';
import './scss/main.scss';
//gets index.js from components directory
import components from './components';
//gets index.js from services directory
import services from './services';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import 'angular-ui-router/release/stateEvents';
import routes from './routes';
import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';
import http from './http';
import auth from './auth';


const app = angular.module('myApp', [
    components,
    services,
    uiRouter,
    angular.module('ui.router.state.events').name,
    defaultRoute,
    dialog
]);

app.config(routes);

const dev = 'https://pet-store-401.herokuapp.com/api';

// gives the service "object" directly
//same as:
// app.factory('apiUrl', function() {
//     return dev;
// });
app.value('apiUrl', dev);
app.config(http);
app.run(auth);

