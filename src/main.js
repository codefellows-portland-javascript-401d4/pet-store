import angular from 'angular';
import uiRouter from 'angular-ui-router';
import resource from 'angular-resource';

import components from './components';
import services from './services';
import routes from './routes';
import './scss/main.scss';

const app = angular.module('myApp', [
  components,
  services,
  uiRouter,
  resource

]);

app.config(routes);

const dev = 'https://pet-store-401.herokuapp.com/api/unauth';

app.value('apiUrl', dev);