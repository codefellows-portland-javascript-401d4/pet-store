petService.$inject = ['$http', 'apiUrl'];

export default function petService($http, apiUrl) {
  return{
    get() {
      return $http.get(`${apiUrl}/pet`)
                .then(res => res.data);
    },
    add(pet) {
      return $http.post(`${apiUrl}/pet`, pet)
                .then(res => res.data);
    }
  };
}