storesService.$inject = [ '$http', 'apiUrl' ];

export default function storesService( $http, apiUrl ) {
  return {
    get(id) {
      console.log('In get');      
      if(!id) return this.getStores();
      return $http.get( `${apiUrl}/stores/${id}` )
      .then( res => res.data );
      
    },

    getStores() {
      console.log('In getStores');
      return $http.get( `${apiUrl}/stores` )
      .then( res => res.data );
      
    },

    // add(store) {
    //   return $http.post( `${apiUrl}/stores`, store )
    //   .then( res => res.data );

    // }
  };
}