angular.module("SiAR").config(function($routeProvider){
	$routeProvider.when("/login",{
		templateUrl: "view/login.html",
		controller: "loginCtrl"
	});
    $routeProvider.when("/principal",{
        templateUrl: "view/principal.html",
        controller: "principalCtrl"
    });

	$routeProvider.when("/listFuncionarios",{
		templateUrl: "view/listFuncionarios.html",
		controller: "listFuncionariosCtrl",
        resolve: {
            funcionarios: function (listFuncionariosAPI) {
                return listFuncionariosAPI.getFuncionarios();
            }
        }
	});
	$routeProvider.when("/pontosBatidos",{
        templateUrl: "view/pontosBatidos.html",
        controller: "pontosBatidosCtrl",
        resolve: {
            ponto_eletronico: function (pontoEletronicoAPI) {
                return pontoEletronicoAPI.getPontosBatidos();
            }
        }
    });

    $routeProvider.when("/CadastrarPontoEletronicoManual",{
        templateUrl: "view/CadastrarPontoEletronicoManual.html",
        controller: "CadastrarPontoEletronicoManualCtrl"
    });

    $routeProvider.when("/funcionario/:cpf_funcionario",{
        templateUrl: "view/funcionario.html",
        controller: "funcionarioCtrl",
        resolve: {
            funcionario: function (listFuncionariosAPI, $route) {
                return listFuncionariosAPI.getFuncionario($route.current.params.cpf_funcionario);
            },
            funcionarioTurno: function (funcionarioAPI, $route) {
                return funcionarioAPI.getFuncTurno($route.current.params.cpf_funcionario);
            }
            // funcEstCiv: function (funcionarioAPI, $route) {
            //     return funcionarioAPI.getFuncEstadoCivil($route.current.params.cpf_funcionario);
            // },
            // funcRest: function (funcionarioAPI, $route) {
            //     return funcionarioAPI.getFuncRest($route.current.params.cpf_funcionario);
            // },
            // funcFuncao: function (funcionarioAPI, $route) {
            //     return funcionarioAPI.getFuncFuncao($route.current.params.cpf_funcionario);
            // },
        }
    });

    $routeProvider.when("/CadastrarFuncionario",{
        templateUrl: "view/CadastrarFuncionario.html",
        controller: "CadastrarFuncionarioCtrl"
    });

    $routeProvider.when("/atualizarFuncionario/:cpf_funcionario",{
        templateUrl: "view/atualizarFuncionario.html",
        controller: "atualizarFuncionarioCtrl",
        resolve:{
            funcionario: function(funcionarioAPI, $route){
                return funcionarioAPI.getFuncionario($route.current.params.cpf_funcionario);
            }
        }

    });
    //
    // $routeProvider.when("/CadastrarTurnoFuncionario",{
    //     templateUrl: "view/CadastrarTurnoFuncionario.html",
    //     controller: "CadastrarTurnoFuncionarioCtrl",
    // });

    $routeProvider.when("/CadastrarTurnoFuncionario/:cpf_funcionario", {
        templateUrl: "view/CadastrarTurnoFuncionario.html",
        controller: "CadastrarTurnoFuncionarioCtrl",
        resolve: {
            funcionarioTurno: function (funcionarioAPI, $route) {
               return funcionarioAPI.getTurnosFuncionario($route.current.params.cpf_funcionario);
            },
            funcionario: function (funcionarioAPI, $route) {
                return funcionarioAPI.getFuncionario($route.current.params.cpf_funcionario);
            },
            diaFunc: function (funcionarioAPI, $route) {
                return funcionarioAPI.getFuncDia($route.current.params.cpf_funcionario);
            },
            turnoFunc: function (funcionarioAPI, $route) {
                return funcionarioAPI.getFuncTurno($route.current.params.cpf_funcionario);
            }
        }
    });

    $routeProvider.when("/AtualizarTurnoFuncionario/:idt_turnos_funcionario",{
        templateUrl: "view/AtualizarTurnoFuncionario.html",
        controller: "AtualizarTurnoFuncionarioCtrl",
        resolve:{
            AtualizarTurnoFuncionario: function(funcionarioAPI, $route){
                return funcionarioAPI.getTurnosFuncionario($route.current.params.idt_turnos_funcionario);
            }
        }

    });
    // $routeProvider.when("/funcionario/:cod_funcao",{
    //     templateUrl: "view/funcionario.html",
    //     controller: "funcionarioCtrl",
    //     resolve: {
    //         funcao: function (listFuncionariosAPI) {
    //             return listFuncionariosAPI.getFuncoes();
    //         },
    //     }
    //
    // });

    $routeProvider.when("/CadastrarCardapio",{
        templateUrl: "view/CadastrarCardapio.html",
        controller: "CadastrarCardapioCtrl"
    });

    $routeProvider.when("/atualizarCardapio/:idt_cardapio",{
        templateUrl: "view/atualizarCardapio.html",
        controller: "atualizarCardapioCtrl",
        resolve:{
            cardapio: function(cardapioAPI, $route){
                return cardapioAPI.getItemDoCardapio($route.current.params.idt_cardapio);
            }
        }

    });


    $routeProvider.when("/cardapio",{
        templateUrl: "view/cardapio.html",
        controller: "cardapioCtrl",
        resolve: {
            cardapio: function (cardapioAPI) {
                return cardapioAPI.getItensDoCardapio();
            },
        }

    });

    $routeProvider.otherwise({redirectTo:"/login"})
});