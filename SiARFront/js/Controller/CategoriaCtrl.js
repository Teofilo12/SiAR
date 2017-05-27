angular.module("SiARBack").controller("CategoriaCtrl", function($scope, $http)
{
    var carregarCategorias = function() {
        $http.get("http://localhost/SiARBack/categoria/?").success(function (data) {
            $scope.categoria = data;
        });
    };
    carregarCategorias();
});

