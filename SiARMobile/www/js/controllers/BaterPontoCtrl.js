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
    console.log($scope.today);

    $scope.Logar = function(ponto_eletronico) {
        funcionarioAPI.login(ponto_eletronico).success(function (data) {
            if (data.length == 1) {
                pontoEletronicoAPI.postComPontoEntrada(ponto_eletronico).success(function (data) {
                    console.log(data);
                    ponto_eletronico.cod_funcionario = ponto_eletronico.cpf_funcionario;
                    ponto_eletronico.ponto_hr_entrada = $scope.today;
                    ponto_eletronico.ponto_hr_saida = '0000-00-00 00:00';
                    // delete $scope.ponto_eletronico;
                    alert("Ponto Batido com sucesso!");
                    // if (data.cod_funcao == 1)
                    //     $location.path("/principal");
                    // else{
                    //     alert("Usuário não autorizado!")
                    //
                })
            } else {
                alert("Dados incorretos!");
                $scope.loginForm.$setPristine();
            }
        });
    }

});