
export default function storeService($http, apiUrl) {
    return {
        getAll() {
            return $http.get(`${apiUrl}/stores`)
                .then(res => {
                    console.log('getAll route hit', res.data);
                    return res.data;
                });
        },
        get(id) {
            return $http.get(`${apiUrl}/stores/${id}`)
                .then(res => res.data);
        },
        add(store) {
            console.log('add route hit');
            return $http.post(`${apiUrl}/stores`, store)
                .then(res => {
                    console.log(res.data);
                    return res.data; 
                });
        }
    };
}