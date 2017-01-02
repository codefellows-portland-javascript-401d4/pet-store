storesService.$inject = [ '$http', 'apiUrl' ];

export default function storesService( $http, apiUrl ) {
  return {
    get(id) {
      console.log('In get with id of: ', id);      
      if(!id) return this.getStores();
      return $http.get( `${apiUrl}/stores/${id}` )
      .then( res => {
        console.log('res.data: ', res.data);
        return res.data;
      });
      
    },

    getStores() {
      console.log('In getStores');
      return $http.get( `${apiUrl}/stores` )
      .then( res => res.data );
      
    },

    add(store) {
      return $http.post( `${apiUrl}/stores`, store )
      .then( res => res.data );

    },
  };
}