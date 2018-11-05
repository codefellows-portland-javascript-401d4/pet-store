tokenService.$inject = [ '$window' ];

const TOKEN_NAME = 'petStoreToken'; // eslint-disable-line no-unused-vars

export default function tokenService($window) { // eslint-disable-line no-unused-vars
  return {
    get() {
      return $window.localStorage.getItem(TOKEN_NAME);
    },
    remove() {
      $window.localStorage.removeItem(TOKEN_NAME);
    },
    set(token) {
      $window.localStorage.setItem(TOKEN_NAME, token);
    }
  };
}