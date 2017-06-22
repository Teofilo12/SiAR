angular.module("SiAR").controller("BaterPontoCtrl", function ($scope, $filter, $http, pontoEletronicoAPI, funcionarioAPI, $location)
{
  //  $scope.funcionario = funcionario.data;

    var formatDate = function (date) {
        var day = date.getDay();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hour = date.getHours();
        var minute = date.getMinutes();
        return year + "-" + month + "-" + day + " " + hour + ":" + minute;
    };
    //
    // $scope.BaterPonto = function(ponto_eletronico){
    //     $scope.adicionarP;
    //     ponto_eletronico.ponto_hr_entrada = formatDate(ponto_eletronico.ponto_hr_entrada);
    //     pontoEletronicoAPI.postPontoManual(ponto_eletronico).success(function(data){
    //         delete $scope.ponto_eletronico;
    //         alert("Ponto Eletrônico Cadastrado com Sucesso!");
    //         $location.path("/pontoEletronico");
    //         $scope.pontoManualForm.$setPristine();
    //     });
    // };

    $scope.today = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm');
    $scope.diaBatido = $filter('date')(new Date(), 'yyyy-MM-dd');
    console.log($scope.today);

    $scope.Logar = function(ponto_eletronico) {

        funcionarioAPI.login(ponto_eletronico).success(function (data) {

            if (data.length == 1) {

                if (ponto_eletronico.ponto_hr_entrada == null) {
                    ponto_eletronico.cod_funcionario = ponto_eletronico.cpf_funcionario;
                    ponto_eletronico.ponto_hr_entrada = $scope.today;
                    ponto_eletronico.ponto_hr_saida = '0000-00-00 00:00';
                    pontoEletronicoAPI.postComPontoEntrada(ponto_eletronico).success(function (data) {
                        delete $scope.ponto_eletronico;
                        alert("Ponto de Entrada Batido com sucesso!");
                        $scope.loginForm.$setPristine();
                    })
                } else {
                    ponto_eletronico.cod_funcionario = ponto_eletronico.cpf_funcionario;
                    ponto_eletronico.ponto_hr_saida = $scope.today;
                    pontoEletronicoAPI.putComPontoSaida(ponto_eletronico).success(function (data) {
                        delete $scope.ponto_eletronico;
                        alert("Ponto de Saída Batido com Sucesso!");
                        $scope.loginForm.$setPristine();
                    });
                }
            } else {
                alert("Dados incorretos!");
                $scope.loginForm.$setPristine();
            }
        });
    }

});