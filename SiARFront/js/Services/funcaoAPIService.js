angular.module("SiARBack").factory("funcaoAPI", function($http){
    var _getFuncoes1 = function () {
        return $http.get("http://localhost/SiARBack/funcao/?");
    };
    return{
        getFuncoes1: _getFuncoes1
    };
});