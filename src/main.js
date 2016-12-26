import angular from 'angular';
import './scss/main.scss';

import components from './components';
import services from './services';

import uiRouter from 'angular-ui-router';
import routeDefault from 'angular-ui-router-default';
import routes from './routes';

const app = angular.module('myApp', [
  components,
  services,
  uiRouter,
  routeDefault
]);

app.config(routes);

const dev = 'https://pet-store-401.herokuapp.com/api';

app.value('apiUrl', dev);