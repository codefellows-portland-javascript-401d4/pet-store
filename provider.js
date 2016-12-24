class Module {

    provider(name, definition){
    console.log(name, definition);
    }

    //takes name of service
    // takes function
    //turn this information into something the provider would recognize
    factory(name, fn){
        const defintion = function(){
            this.$get = fn;
        };
        this.provider(name, defintion)
        return this.provider(name, definition);
    };

    value(name, val) {
        this.factory(name, ()=>val);
        return this;
    }

    service(name, Constructor){
        this.factory(name, ()=>new Constructor);
        return this;
    }
}

const app = new Module();

app.factory('myService', funcion($http){
    return {
        get(){
            return $http.get('/');
        }
    }
});