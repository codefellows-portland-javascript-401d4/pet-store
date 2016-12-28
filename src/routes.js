routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    component: 'stores'
    
  });

  $stateProvider.state({
    name: 'stores.store',
    url: '/:id',
    resolve: {
      id: ['$transition$', t => t.params().id]
    }, 
    
    component: 'storesStore'
    
  });

  $urlRouterProvider.otherwise( '/stores' );

}

