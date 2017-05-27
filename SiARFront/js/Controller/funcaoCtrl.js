angular.module("SiARBack").controller("funcaoCtrl", function($scope, $http, funcaoAPI)
{
    var carregarFuncoes = function() {
        funcaoAPI.getFuncoes1().success(function (data) {
            $scope.funcao = data;
        });
    };
    carregarFuncoes();
});
