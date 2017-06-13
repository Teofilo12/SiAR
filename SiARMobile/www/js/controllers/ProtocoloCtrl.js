app.controller('ProtocoloCtrl', function($scope, $http, $ionicPopup) {
	
	// $scope.teste = 0;
	
	// $scope.num_proc = '';
	// $scope.gerarProtocolo = function(){
		
	// 	$http.get("http://alexandreapp.esy.es/DomesticaWebService/view/clock_in/generate_protocol.php").success(function(retorno){
	// 		$scope.num_proc = retorno[0].prot_clock_in;
	// 	});
		
	// };


$scope.num_proc = '';
	$scope.gerarProtocolo = function(){
		
		$http.post("http://localhost:8080/DomesticaWS/clock_in/").success(function(retorno){
			$scope.num_proc = retorno[0].prot_clock_in;
			
		});
		
	};

	$scope.validarProtocolo = function(numProc){
		console.log(numProc);
		$http.get("http://localhost:8080/DomesticaWS/clock_in/?prot_clock_in="+numProc).success(function(retorno){
			if(retorno == 1){
				var alertPopup = $ionicPopup.alert({
					title: 'Sucesso!',
					template: 'Sua hora de entrada foi validada com SUCESSO !'
				});
			}else{
				var alertPopup = $ionicPopup.alert({
					title: 'Falha!',
					template: 'Protocolo inexistente, por favor tente novamente!'
				});
			}
		});
	};
});

