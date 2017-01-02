// $http is Angular's built in AJAX library
storeService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function storeService($http, apiUrl) {
  return {

    getAll() {
      return $http.get(`${apiUrl}/unauth/stores`)
        .then(res => res.data);
    },
    get(store) {
      return $http.get(`${apiUrl}/unauth/stores/` + store.id)
        .then(res => res.data);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/unauth/stores/${id}`)
        .then(res => res.data);
    },
    add(store) {
      return $http.post(`${apiUrl}/unauth/stores`, store)
        .then(res => res.data);
    }
  };
}
