import angular from 'angular';
import pet from './pet/pet';
import stores from './stores/stores';
import newStore from './new-store/new-store';
import welcome from './welcome/welcome';
import signin from './account/signin/signin';
import signup from './account/signup/signup';
import user from './account/user/user';
import userAuth from './account/user-auth';
import store from './store/store';
import newPet from './new-pet/new-pet';

const components = angular.module('components', [])
    .component('welcome', welcome)
    .component('pet', pet)
    .component('newStore', newStore)
    .component('stores', stores)
    .component('signin', signin)
    .component('signup', signup)
    .component('user', user)
    .component('userAuth', userAuth)
    .component('store', store)
    .component('newPet', newPet);


export default components.name;