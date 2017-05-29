angular.module("SiARBack").controller("funcionarioCtrl", function ($scope, $http, $routeParams, funcionario)
{
	$scope.funcionario = funcionario.data;

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