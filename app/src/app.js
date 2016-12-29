import './scss/main.scss';
import angular from 'angular';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
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
  dialog

]);

app.config(http);
app.config(routes);
app.run(auth);

app.value('apiUrl', 'https://pet-store-401.herokuapp.com/api');