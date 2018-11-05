import angular from 'angular';
// 3d party imports
import animate from 'angular-animate';
import resource from 'angular-resource';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';

// needed for old-school $stateChanged events but must 
// manually grab module from angular, since not exported
import 'angular-ui-router/release/stateEvents';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';
// file imports
import components from './components';
import services from './services';
import routes from './routes';
import './scss/main.scss';
import http from './http';
import auth from './auth';

const app = angular.module('myApp', [
  components,
  services,
  uiRouter,
  resource, 
  animate,
  defaultRoute,
  angular.module( 'ui.router.state.events' ).name,
  dialog

]);

app.config( http );
app.config( routes );
app.run( auth );

const dev = 'https://pet-store-401.herokuapp.com/api';

app.value( 'apiUrl', dev );