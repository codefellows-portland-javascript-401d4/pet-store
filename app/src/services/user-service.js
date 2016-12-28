userService.$inject = ['tokenService', '$http', 'apiUrl'];

export default function userService(token, $http, apiUrl) {

  const current = token.get();
  if (current) {
    $http
      .get(`${apiUrl}/auth/verify`)
      .catch((err) => {
        console.log('Token error: ', err);
        token.remove();
      });
  }

  function credential(endpoint) {
    return (credentials) => {
      return $http.post(`${apiUrl}/auth/${endpoint}`, credentials)
        .then(result => {
          token.set(result.data.token);
        })
        .catch(err => {
          throw err.data;
        });
    };
  }

  return {  // this is the actual service you can use elsewhere

    isAuthenticated() {
      return !!token.get();
    },

    logout() {
      token.remove();
    },

    signin: credential('signin'),

    signup: credential('signup')

  };
}