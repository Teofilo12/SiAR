angular.module("SiARBack").controller("listFuncionariosCtrl", function ($scope, $http, listFuncionariosAPI)
{
	var carregarListFuncionarios = function() {
		listFuncionariosAPI.ionarios().success(function (data) {
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