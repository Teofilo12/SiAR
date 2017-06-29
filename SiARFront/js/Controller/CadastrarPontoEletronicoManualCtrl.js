angular.module("SiAR").controller("CadastrarPontoEletronicoManualCtrl", function ($scope, $http, pontoEletronicoAPI, $location)
{

     var formatDate = function (date) {
     	var day = date.getDate();
     	var month = date.getMonth();
     	var year = date.getFullYear();
     	var hour = date.getHours();
     	var minute = date.getMinutes();
     	return year + "-" + (month+1) + "-" + day + " " + hour + ":" + minute;
     };

    $scope.adicionarPonto = function(ponto_eletronico){
        $scope.adicionarP;
        ponto_eletronico.ponto_hr_entrada = formatDate(ponto_eletronico.ponto_hr_entrada);
        ponto_eletronico.ponto_hr_saida = formatDate(ponto_eletronico.ponto_hr_saida);
        pontoEletronicoAPI.postPontoManual(ponto_eletronico).success(function(data){
            delete $scope.ponto_eletronico;
            alert("Ponto Eletrônico Cadastrado com Sucesso!");
            $location.path("/pontosBatidos");
            $scope.pontoManualForm.$setPristine();
        });
    };

    pontoEletronicoAPI.getFuncionarios().success(function (data) {
        $scope.funcionario = data;
    });

});