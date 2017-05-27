angular.module("SiARBack").controller("CadastrarCardapioCtrl", function ($scope, $http, cardapioAPI, $location)
{
    $scope.cardapio = {};

    $scope.adicionarItemNoCardapio = function(cardapio){
        $scope.adicionarMenu;
        cardapioAPI.cadastrarItemNoCardapio(cardapio).success(function(data){
            delete $scope.cardapio;
            alert("Item Cadastrado no Cardápio com Sucesso!");
            $location.path("/principal");
            $scope.CardapioForm.$setPristine();
        });

    };
});