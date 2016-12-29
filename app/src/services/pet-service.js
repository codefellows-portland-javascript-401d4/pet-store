petService.$inject = ['$http', 'apiUrl'];

export default function petService($http/*, apiUrl*/) {
  return {
    getAll() {
      return $http.get('https://pet-store-401.herokuapp.com/api/unauth/pets')
        .then(res => res.data);
    },

    get(id) {
      return $http.get(`https://pet-store-401.herokuapp.com/api/unauth/pets/${id}`)
      .then(res => res.data);
    },

    add(pet) {
      return $http.post('https://pet-store-401.herokuapp.com/api/unauth/pets', pet)
      .then(res => res.data);
    }
  };
}