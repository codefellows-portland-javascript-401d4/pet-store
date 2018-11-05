userService.$inject = [ 'tokenService', '$http', 'apiUrl', '$window' ];

export default function userService(tokenService, $http, apiUrl, $window) { // eslint-disable-line no-unused-vars
  return {
    isAuthenticated() {
      return !!tokenService.get();
    },
    logout() {
      tokenService.remove();
    },
    signin(credentials) {
      return $http.post(`${apiUrl}/auth/signin`, credentials)
        .then(result => {
          tokenService.set(result.data.token);
        })
        .catch(err => {
          throw err.data;
        });
    },
    signup(credentials) {
      return $http.post(`${apiUrl}/auth/signup`, credentials)
        .then(result => {
          tokenService.set(result.data.token);
        })
        .catch(err => {
          throw err.data;
        });
    }
  };
}