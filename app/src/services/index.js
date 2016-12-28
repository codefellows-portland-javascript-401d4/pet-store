import angular from 'angular';
import storeService from './store-service';
import userService from './user-service';
import tokenService from './token-service';

const service = angular.module('service', [])
    .factory('storeService', storeService)
    .factory('userService', userService)
    .factory('tokenService', tokenService);

export default service.name;