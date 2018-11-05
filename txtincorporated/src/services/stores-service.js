storesService.$inject = [ '$http', 'apiUrl' ];

export default function storesService( $http, apiUrl ) {
  return {
    get(id) {
      if(!id) return this.getStores();
      return $http.get( `${apiUrl}/stores/${id}` )
      .then( res => {
        return res.data;
        
      });      
    },

    getStores() {
      return $http.get( `${apiUrl}/stores` )
      .then( res => res.data );
      
    },

    add(store) {
      return $http.post( `${apiUrl}/stores`, store )
      .then( res => res.data );

    },
  };
}