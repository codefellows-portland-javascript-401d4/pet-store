
import angular from 'angular';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import routes from './routes';
import './scss/main.scss';

const app = angular.module('myApp', [
    components,
    services,
    uiRouter
]);

const dev = 'https://pet-store-401.herokuapp.com/api/unauth';

app.config(routes);

app.value('apiUrl', dev);
