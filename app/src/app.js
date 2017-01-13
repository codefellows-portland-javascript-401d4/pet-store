import angular from 'angular';
import './scss/main.scss';

//pick up index.js from components & services folder
import components from './components';
import services from './services';

// 3rd party modules
import uiRouter from 'angular-ui-router';

// plug-in for 'default' routes
import defaultRoute from 'angular-ui-router-default';

// need this for old $stateChanged events;
import 'angular-ui-router/release/stateEvents';

import resource from 'angular-resource';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

// route, http config, & auth setup
import routes from './routes';
import http from './auth/http';
import auth from './auth/auth';

const app = angular.module('petStore', [
  components,
  services,
  uiRouter,
  angular.module('ui.router.state.events').name,
  defaultRoute,
  dialog,
  resource
]);

app.value('apiUrl', 'https://pet-store-401.herokuapp.com/api');

app.config(routes);
app.config(http);
app.run(auth);
