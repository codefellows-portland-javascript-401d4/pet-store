import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import routes from './routes';
import defaultRoute from 'angular-ui-router-default';
import animate from 'angular-animate';
import resource from 'angular-resource';

const app = angular.module('myApp', [
    components,
    services,
    uiRouter,
    defaultRoute,
    resource,
    animate
]);

app.config(routes);

const apiUrl = 'https://pet-store-401.herokuapp.com/api';

app.value('apiUrl', apiUrl);