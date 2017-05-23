angular.module("SiARBack").controller("funcionarioCtrl", function ($scope, $http, $routeParams, funcionario, status)
{
	$scope.funcionario = funcionario.data;
});