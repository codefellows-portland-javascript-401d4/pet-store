import angular from 'angular';
import './scss/main.scss';

import components from './components';
import services from './services';

import uiRouter from 'angular-ui-router';
import routeDefault from 'angular-ui-router-default';
import 'angular-ui-router/release/stateEvents';

import resource from 'angular-resource';

//for the signin & signup modal popup
import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

import http from './http';
import auth from './auth';
import routes from './routes';


const app = angular.module('myApp', [
  components,
  services,
  uiRouter,
  routeDefault,
  angular.module('ui.router.state.events').name,
  resource,
  dialog
]);

const dev = 'https://pet-store-401.herokuapp.com/api';

app.value('apiUrl', dev);

app.config(http);
app.config(routes);
app.run(auth);