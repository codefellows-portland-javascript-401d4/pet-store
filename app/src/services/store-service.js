storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/stores`)
        .then(res => res.data);
    },

    add(store) {
      return $http.post(`${apiUrl}/stores`, store)
        .then(res => res.data);
    }
  };
}