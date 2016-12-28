storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
  return {
    getStores() {
      return $http.get(`${apiUrl}/unauth/stores`)
        .then(res => res.data);
    },
    addStore(store) {
      return $http.post(`${apiUrl}/unauth/stores`, store)
        .then(res => res.data);
    },
    getStore(store) {
      return $http.get(`${apiUrl}/unauth/stores/` + store.id)
        .then(res => res.data);
    },
    getPets() {
      return $http.get(`${apiUrl}/unauth/pets`)
        .then(res => res.data);
    },
    getPet(id) {
      return $http.get(`${apiUrl}/unauth/pets/${id}`)
        .then(res => res.data);
    },
    addPet(pet) {
      return $http.post(`${apiUrl}/unauth/pets`, pet)
        .then(res => res.data);
    }
  };
}