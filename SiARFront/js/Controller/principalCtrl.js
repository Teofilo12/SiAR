angular.module("SiARBack").controller("principalCtrl", function($scope, $http)
{
		/*var carregarSeriesPrincipais = function() {
			principalAPI.getSeriesPrincipais().success(function (data) {
				$scope.principal = data;
			});
		};
		carregarSeriesPrincipais();*/
		var carregarFuncionariosDoDia = function() {
			$http.get("http://localhost/SiARBack/funcionario/?").success(function (data) {
				$scope.nme_funcionario = data;
			});
		};
    carregarFuncionariosDoDia();
	});