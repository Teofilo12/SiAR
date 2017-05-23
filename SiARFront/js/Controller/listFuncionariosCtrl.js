angular.module("SiARBack").controller("listFuncionariosCtrl", function ($scope, $http, funcionarioAPI, listFuncionariosAPI, $location)
{
	var carregarListFuncionarios = function() {
		listFuncionariosAPI.getFuncionarios().success(function (data) {
			$scope.listFuncionarios = data;
		});
	};
	$scope.deleteFuncionarios = function (cpf_funcionario) {
        funcionarioAPI.deletePerfil(cpf_funcionario).success(function (data) {
			alert("Funcionário excluído com sucesso!");
		});
	};
	carregarListFuncionarios();
});