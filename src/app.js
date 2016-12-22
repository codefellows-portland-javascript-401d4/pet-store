import angular from 'angular';
import components from './components';
import services from './services';
import routes  from './routes';

//third party 
import defaultRoute from 'angular-ui-router-default';
import uiRouter from 'angular-ui-router';
import resource from 'angular-resource';

const app = angular.module('myApp', [
    components,
    services,
    uiRouter,
    defaultRoute, 
    resource
]);

app.config(routes);

const dev = 'https://pet-store-401.herokuapp.com/api';

app.value('apiUrl', dev);