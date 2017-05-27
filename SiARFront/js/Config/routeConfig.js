angular.module("SiARBack").config(function($routeProvider){
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

    $routeProvider.when("/funcionario/:cpf_funcionario",{
        templateUrl: "view/funcionario.html",
        controller: "funcionarioCtrl",
        resolve: {
            funcionario: function(listFuncionariosAPI, $route){
                return listFuncionariosAPI.getFuncionario($route.current.params.cpf_funcionario);
            }
        }

    });

    $routeProvider.when("/CadastrarCardapio",{
        templateUrl: "view/CadastrarCardapio.html",
        controller: "CadastrarCardapioCtrl"
    });

    $routeProvider.when("/CadastrarFuncionario",{
        templateUrl: "view/CadastrarFuncionario.html",
        controller: "CadastrarFuncionarioCtrl"
    });
    $routeProvider.otherwise({redirectTo:"/principal"})
});