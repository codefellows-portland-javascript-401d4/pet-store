
import angular from 'angular';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import routes from './routes';
import './scss/main.scss';

import 'angular-ui-router/release/stateEvents';

import http from './http';
import auth from './auth';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

const app = angular.module('myApp', [
    components,
    services,
    uiRouter,
    angular.module('ui.router.state.events').name,
    dialog
]);

const dev = 'https://pet-store-401.herokuapp.com/api';

app.config(http);
app.config(routes);
app.value('apiUrl', dev);
app.run(auth);
