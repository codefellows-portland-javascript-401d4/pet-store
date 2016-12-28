import angular from 'angular';
import components from './components';
import services from './services';
import './scss/main.scss';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';

import resource from 'angular-resource';
import 'angular-ui-router/release/stateEvents';
import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

import routes from './routes';
import http from './http';
import auth from './auth';

const app = angular.module('myApp', [
    components,
    services,
    uiRouter,
    angular.module('ui.router.state.events').name,
    defaultRoute,
    resource,
    dialog
]);

const dev = 'https://pet-store-401.herokuapp.com/api';


app.value('apiUrl', dev);

app.factory('apiUrl', function() {
    return dev;
});

app.config(http);
app.config(routes);
app.run(auth);
