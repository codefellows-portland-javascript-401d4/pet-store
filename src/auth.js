auth.$inject = ['$rootScope', 'userService', 'ngDialog', '$state'];

export default function auth($rootScope, userService, ngDialog, $state) {

  console.log('before auth');
  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
    console.log('first', toState, 'toState', toParams, 'toParams');
    if (!(toState.data && toState.data.public) && !userService.isAuthenticated()) {
      event.preventDefault();
      console.log('2nd', toState, 'toState', toParams, 'toParams');

      const dialog = ngDialog.open({
        template: '<user-auth success="success"></user-auth>',
        plain: true,
        controller: ['$scope', function($scope) {
          $scope.success = function() {
            dialog.close();
            return $state.go(toState.name, toParams);
          };
        }]
      });
    }
  });

}