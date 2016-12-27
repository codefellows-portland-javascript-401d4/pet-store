import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './scss/main.scss';
import components from './components';
// import services from './services';
import routes from './routes';

const dev = 'https://pet-store-401.herokuapp.com/api';
const app = angular.module('petStore', [
  components,
  // services,
  uiRouter
]);

app.config(routes);
app.value('apiUrl', dev);
