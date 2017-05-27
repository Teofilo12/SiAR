angular.module("SiARBack").factory("categoriaAPI", function($http){
    var _getCategorias = function () {
        return $http.get("http://localhost/SiARBack/categoria/?");
    };
    return{
        getCategorias: _getCategorias
    };
});