    angular.module("SiAR").controller("funcionarioCtrl", function ($scope, $http, funcionario, funcionarioTurno, funcionarioAPI)
{
	$scope.funcionario = funcionario.data;
    $scope.funcionarioTurno = funcionarioTurno.data;
	// $scope.funcEstCiv = funcEstCiv.data;
	// $scope.funcRest = funcRest.data;
	// $scope.funcFuncao = funcFuncao.data;

    // $scope.updateFuncionario = function (cpf_funcionario) {
	 //    funcionarioAPI.atualizaFuncionario(cpf_funcionario).success(function (data) {
    //        alert("Funcionário alterado com sucesso!")
    //     });
    // };

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

    $scope.deleteFuncionario = function (cpf_funcionario) {
        funcionarioAPI.deleteCadastro(cpf_funcionario).success(function (data) {
            alert("Funcionário excluído com sucesso!");
        });
    };

});