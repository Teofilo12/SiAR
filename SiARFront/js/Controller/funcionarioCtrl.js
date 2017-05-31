angular.module("SiARBack").controller("funcionarioCtrl", function ($scope, $http, $routeParams, funcionario, funcionarioAPI)
{
	$scope.funcionario = funcionario.data;

    // $scope.updateFuncionario = function (cpf_funcionario) {
	 //    funcionarioAPI.atualizaFuncionario(cpf_funcionario).success(function (data) {
    //        alert("Funcionário alterado com sucesso!")
    //     });
    // };

    $scope.deleteFuncionario = function (cpf_funcionario) {
        funcionarioAPI.deleteCadastro(cpf_funcionario).success(function (data) {
            alert("Funcionário excluído com sucesso!");
        });
    };

    // $scope.getImage = function(){
    //     $http({
    //         method:'GET',
    //         url: "http://localhost/SiARBack/funcionario/?img_funcionario=" + getImage
    //         // responseType:'arrayBuffer'
    //     })
    //         .then(function(response){
    //
    //             $scope.b64encoded = btoa(String.fromCharCode.apply(null, response.data[0].ClassImage.data));
    //
    //         })
    // }
});