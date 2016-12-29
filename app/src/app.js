import angular from 'angular';
import './scss/main.scss';

import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import 'angular-ui-router/release/stateEvents';
import resource from 'angular-resource';
import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog-theme-default.css';
import http from './http';
import routes from './routes';
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

app.config(routes);

const dev = 'https://pet-store-401.herokuapp.com/api';

app.value('apiUrl', dev);

app.factory('apiUrl', function(){
  return dev;
});

app.config(http);
app.run(auth);