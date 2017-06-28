angular.module('SiAR.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller("BaterPontoCtrl", function ($scope, $filter, $http, $timeout, pontoEletronicoAPI, funcionarioAPI,$ionicPopup)
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

        $scope.today = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss');
        $scope.diaBatido = $filter('date')(new Date(), 'yyyy-MM-dd');
        console.log($scope.today);
        $scope.posicao = {};
        $scope.showPosition = function(position) {
            $scope.posicao = position.coords;
        }
        $scope.Logar = function(ponto_eletronico) {
            navigator.geolocation.getCurrentPosition($scope.showPosition);
            $timeout(function() {
                console.log($scope.posicao.longitude);
                console.log($scope.posicao.latitude);
                funcionarioAPI.login(ponto_eletronico).success(function (data) {
                    if (data.length == 1) {
                        pontoEletronicoAPI.getPontoEntradaDoDia(ponto_eletronico.cpf_funcionario).success(function (entrada) {
                            pontoEletronicoAPI.getPontoSaidaDoDia(ponto_eletronico.cpf_funcionario).success(function (saida) {
                                console.log(pontoEletronicoAPI.getPontoEntradaDoDia(ponto_eletronico.cpf_funcionario));
                                console.log(entrada.length);
                                // if (entrada.length == 0 || (entrada.length == 1 && saida.length == 1)) {
                                if (entrada.length == saida.length) {
                                    ponto_eletronico.cod_funcionario = ponto_eletronico.cpf_funcionario;
                                    ponto_eletronico.ponto_hr_entrada = $scope.today;
                                    ponto_eletronico.ponto_hr_saida = '0000-00-00 00:00:00';
                                    pontoEletronicoAPI.postComPontoEntrada(ponto_eletronico).success(function (data) {
                                        delete $scope.ponto_eletronico;
                                        // var alertPopup = $ionicPopup.alert({
                                        //     title: 'Sucesso!',
                                        //     template: 'Ponto de Entrada Batido!'
                                        // });
                                        alert('Ponto de entrada batido com sucesso!');
                                        $scope.loginForm.$setPristine();
                                    })
                                    // } else if ((entrada.length == 1 && saida.length == 0) || (entrada.length == 2 && saida.length == 1)) {
                                } else {
                                    ponto_eletronico.cod_funcionario = ponto_eletronico.cpf_funcionario;
                                    ponto_eletronico.ponto_hr_saida = $scope.today;
                                    pontoEletronicoAPI.putComPontoSaida(ponto_eletronico).success(function (data) {
                                        delete $scope.ponto_eletronico;
                                        // var alertPopup = $ionicPopup.alert({
                                        //     title: 'Sucesso!',
                                        //     template: 'Ponto de Saída Batido!'
                                        // });
                                        alert('Ponto de saída batido com sucesso!');
                                        $scope.loginForm.$setPristine();
                                    });
                                }
                                // else {
                                //     var alertPopup = $ionicPopup.alert({
                                //         title: 'Falha!',
                                //         template: 'Todos os pontos do dia já foram batidos!'
                                //     });
                                // }
                            })
                        })
                    } else {
                        // var alertPopup = $ionicPopup.alert({
                        //     title: 'Falha!',
                        //     template: 'Dados Incorretos!'
                        // });
                        alert('Dados Incorretos!');
                        $scope.loginForm.$setPristine();
                    }
                });

            }, 1000);

        }

    })

.controller("CardapioCtrl", function ($scope, $http, cardapio)
    {
        $scope.cardapio = cardapio.data;
    })

.controller("AvaliacaoCtrl",function ($scope, $http, avaliacaoAPI, funcionario, $location)
    {
        $scope.notas = [{nota:1},{nota:2},{nota:3},
                        {nota:4},{nota:5}];

        $scope.closeAvaliacao = function() {
            $scope.modal.hide();
        };

        $scope.funcionario = funcionario.data;
        console.log($scope.funcionario);

        $scope.AdicionarAvaliacao = function(avaliacao) {
            avaliacaoAPI.postAvaliacao(avaliacao).success(function (data) {
                alert('Obrigado pela avaliação!')
                $location.path('#/app/Cardapio');
            });
        }
    })
;
