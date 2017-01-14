storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
  return {
    getStores() {
      return $http.get(`${apiUrl}/stores`)
        .then(res => res.data);
    },
    addStore(store) {
      return $http.post(`${apiUrl}/stores/`, store)
        .then(res => res.data);
    },
    getStore(id) {
      return $http.get(`${apiUrl}/stores/${id}`)
       .then(res => res.data);
    },
    addPet(pet) {
      return $http.post(`${apiUrl}/pets`, pet)
        .then(res => res.data);
    }
  };
}