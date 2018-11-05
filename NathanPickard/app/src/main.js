import angular from 'angular';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import 'angular-ui-router/release/stateEvents';
import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';
import components from './components';
import services from './services';
import routes from './routes';
import http from './http';
import auth from './auth';

const dev = 'https://pet-store-401.herokuapp.com/api';
const app = angular.module('petStore', [
  components,
  services,
  uiRouter,
  defaultRoute,
  angular.module('ui.router.state.events').name,
  dialog
]);

app.value('apiUrl', dev);
app.config(http);
app.config(routes);
app.run(auth);