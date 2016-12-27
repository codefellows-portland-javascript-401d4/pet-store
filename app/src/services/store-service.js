
storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/stores`)
                .then(res => res.data);
        },
        add(store) {
            return $http.post(`${apiUrl}/stores`, store)
                .then(res => res.data);
        }, 
        remove(store) {
            return $http.delete(`${apiUrl}/stores/${store._id}`)
                .then(res => res.data);
        }
    };
};
