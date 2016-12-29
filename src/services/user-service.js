userService.$inject = ['tokenService', '$http', 'apiUrl'];

export default function userService(token, $http, apiUrl) {
    const current = token.get();

    //if current token exists when service is instantiated, verify the token.  If it's bad, remove the token
    if (current) {
        $http
            .get(`${apiUrl}/auth/verify`)
            .catch(() => token.remove());
    }

    //takes signup/signin and returns a function to post credentials 
    function credential(endpoint) {
        return (credentials) => {
            return $http.post(`${apiUrl}/auth/${endpoint}`, credentials)
            .then(result => {
                token.set(result.data.token);
            })
            .catch(err => {
                throw err.data;
            });
        };
    }

    return {
        //have a token?
        isAuthenticated() {
            return !!token.get();
        },

        //remove token
        logout() {
            token.remove();
        },

        //call API and set token
        signin: credential('signin'), 

        signup: credential('signup')
    };
}