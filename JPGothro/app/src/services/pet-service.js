
petService.$inject = ['$http', 'apiUrl'];

export default function petService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/pets`)
                .then(res => res.data);
        },
        add(pet) {
            return $http.post(`${apiUrl}/pets`, pet)
                .then(res => res.data);
        }, 
        remove(pet) {
            return $http.delete(`${apiUrl}/pets/${pet._id}`)
                .then(res => res.data);
        }
    };
};
