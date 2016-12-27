import angular from 'angular';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import routes from './routes';


const app = angular.module('myApp', [
  components,
  services,
  uiRouter

]);

app.config(routes);

app.value('apiUrl', 'https://pet-store-401.herokuapp.com/api');