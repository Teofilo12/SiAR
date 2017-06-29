angular.module("SiAR").controller("CadastrarFuncionarioCtrl", function ($scope, $filter, $http, funcionarioAPI, $location)
{
	$scope.funcionario = {};

	// var formatDate = function (date) {
	// 	var day = date.getDay();
	// 	var month = date.getMonth();
	// 	var year = date.getFullYear();
	// 	return year + "-" + month + "-" + day;
	// }

	$scope.adicionarFuncionario = function(funcionario){
		$scope.adicionarF;
       funcionario.dta_nasc_funcionario = $filter('date')(new Date(funcionario.dta_nasc_funcionario), 'yyyy-MM-dd');
        funcionarioAPI.postFuncionario(funcionario).success(function(data){
			delete $scope.funcionario;
			alert("Funcionário Cadastrado com Sucesso!");
			$location.path("/listFuncionarios");
			$scope.funcionarioForm.$setPristine();
		});
	};

		funcionarioAPI.getEstadoCivil().success(function (data) {
          $scope.estadocivil = data;
        });

		funcionarioAPI.getRestaurante().success(function (data) {
			$scope.restauranteF = data;
		});

		funcionarioAPI.getFuncao().success(function (data) {
			$scope.funcionarioFuncao = data;
		});
});