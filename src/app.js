import angular from 'angular';
import './scss/main.scss';

import components from './components';
import services from './services';

import animate from 'angular-animate';
import uiRouter from 'angular-ui-router';
// import defaultRoute from 'angular-ui-router-default';

import 'angular-ui-router/release/stateEvents';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

import http from './http';
import routes from './routes';
import auth from './auth';

const app = angular.module('myApp', [
  components,
  services,
  animate,
  uiRouter,
  // defaultRoute,
  angular.module('ui.router.state.events').name,
  dialog
]);

app.value('apiUrl', 'https://pet-store-401.herokuapp.com/api');

app.config(http);
app.config(routes);
app.run(auth);
