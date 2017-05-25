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
				$scope.funcionario = data;
			});
		};
    carregarFuncionariosDoDia();

    $http({
        method: 'GET',
        url: imageUrl,
        responseType: 'arraybuffer'
    }).then(function(response) {
        console.log(response);
        var str = _arrayBufferToBase64(response.data);
        console.log(str);
        // str is base64 encoded.
    }, function(response) {
        console.error('error in getting static img.');
    });


    function _arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
	});