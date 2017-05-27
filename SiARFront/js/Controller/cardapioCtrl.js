angular.module("SiARBack").controller("cardapioCtrl", function ($scope, $http, $routeParams, cardapio)
{
    $scope.cardapio = cardapio.data;
});