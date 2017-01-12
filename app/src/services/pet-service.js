// $http is Angular's built in AJAX library
petService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function petService($http, apiUrl) {
  return {

    getAll() {
      return $http.get(`${apiUrl}/unauth/pets`)
        .then(res => res.data);
    },
    get(id) {
      return $http.get(`${apiUrl}/unauth/pets/${id}`)
        .then(res => res.data);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/unauth/pets/${id}`)
        .then(res => res.data);
    },
    add(pet) {
      return $http.post(`${apiUrl}/unauth/pets`, pet)
        .then(res => res.data);
    }
  };
}
