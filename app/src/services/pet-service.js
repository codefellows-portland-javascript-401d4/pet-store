// $http is Angular's built in AJAX library
petService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function petService($http, apiUrl) {
  return {

    getAllPets() {
      return $http.get(`${apiUrl}/unauth/pets`)
        .then(res => res.data);
    },
    getPet(id) {
      return $http.get(`${apiUrl}/unauth/pets/${id}`)
        .then(res => res.data);
    },
    removePet(id) {
      return $http.delete(`${apiUrl}/unauth/pets/${id}`)
        .then(res => res.data);
    },
    addPet(pet) {
      return $http.post(`${apiUrl}/unauth/pets`, pet)
        .then(res => res.data);
    }
  };
}
