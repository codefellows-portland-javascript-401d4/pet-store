import angular from 'angular';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
// import './scss/main.scss';
import components from './components';
import services from './services';
import routes from './routes';

const dev = 'https://pet-store-401.herokuapp.com';
const app = angular.module('petStore', [
  components,
  services,
  uiRouter,
  defaultRoute
]);

app.config(routes);
app.value('apiUrl', dev);