import angular from 'angular';
import camelcase from 'camelcase';
import path from 'path';

const context = require.context(
    './',
    true,
    /^\.\/(?!index).+?\.js$/
);

const module = angular.components('components');