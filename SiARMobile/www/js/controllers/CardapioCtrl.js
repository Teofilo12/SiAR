angular.module("SiAR").controller("CardapioCtrl", function ($scope, $http, cardapio)
{
    $scope.cardapio = cardapio.data;
    console.log($scope.cardapio);
});