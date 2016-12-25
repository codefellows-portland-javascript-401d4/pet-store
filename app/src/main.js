import angular from 'angular';

const app = angular.module('myApp', []);

const dev = 'https://pet-store-401.herokuapp.com/api';

app.value('apiUrl', dev);

app.factory('apiUrl', function() {
    return dev;
});

