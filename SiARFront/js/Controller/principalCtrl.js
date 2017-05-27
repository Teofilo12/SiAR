angular.module("SiARBack").controller("principalCtrl", function($scope, $http)
{
		var carregarFuncionariosDoDia = function() {
			$http.get("http://localhost/SiARBack/funcionario/?").success(function (data) {
				$scope.funcionario = data;
			});
		};
    carregarFuncionariosDoDia();
	});