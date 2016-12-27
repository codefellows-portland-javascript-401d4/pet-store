import angular from 'angular';
// import './scss/main.scss';
import components from './components';
import services from './services';

import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import 'angular-ui-router/release/stateEvents';

import http from './http';
import routes from './routes';
import auth from './auth';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

const app = angular.module('myApp', [
  components,
  services,
  uiRouter,
  angular.module('ui.router.state.events').name,
  defaultRoute,
  dialog
]);

const server = 'https://pet-store-401.herokuapp.com/api';

app.value('apiUrl', server);

app.config(http);
app.config(routes);
app.run(auth);
