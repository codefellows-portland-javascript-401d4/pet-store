petService.$inject = ['$http', 'apiUrl'];

export default function petService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/unauth/pets`)
        .then(res => res.data);
    },
    getOne(id) {
      return $http.get(`${apiUrl}/unauth/pets/${id}`)
        .then(res => res.data);
    },
    addPet(pet) {
      return $http.post(`${apiUrl}/unauth/pets`, pet)
        .then(res => res.data);
    }

  };
}