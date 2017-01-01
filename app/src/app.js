import angular from 'angular';
import components from './components';
import services from './services';
// import './scss/main.scss';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import routes from './routes';

const dev = 'https://pet-store-401.herokuapp.com/api';
const app = angular.module('petStore', [
  components, 
  services,
  uiRouter,
  defaultRoute
]);
app.config(routes);
app.value('apiUrl', dev);