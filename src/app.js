import angular from 'angular';
import './scss/main.scss';
//gets index.js from components directory
import components from './components';
//gets index.js from services directory
import services from './services';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import routes from './routes';


const app = angular.module('myApp', [
    components,
    services,
    uiRouter,
    defaultRoute
]);

app.config(routes);

const dev = 'https://pet-store-401.herokuapp.com/api/unauth';

// gives the service "object" directly
//same as:
// app.factory('apiUrl', function() {
//     return dev;
// });
app.value('apiUrl', dev);

