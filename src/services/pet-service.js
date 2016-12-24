petService.$inject = ['$http', 'apiUrl'];

export default function petService($http, apiUrl) {
    return {
        add(image) {
            return $http
                .post(`${apiUrl}/images`, image)
                .then(res => res.data);
        },
        remove(id) {
            return $http
                .delete(`${apiUrl}/images/${id}`)
                .then(res => res.data);
        }
    };
};