storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
  return {
    getStores() {
      return $http.get(`${apiUrl}/unauth/stores`)
        .then(res => res.data);
    },
    addStore(store) {
      return $http.post(`${apiUrl}/unauth/stores/`, store)
        .then(res => res.data);
    },
    getStore(id) {
      return $http.get(`${apiUrl}/unauth/stores/${id}`)
       .then(res => res.data);
    },
    addPet(pet) {
      return $http.post(`${apiUrl}/unauth/pets`, pet)
        .then(res => res.data);
    }
  };
}