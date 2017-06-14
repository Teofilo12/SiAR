app.controller('PicturesCtrl', function($scope, $http) {
  
  //  $http.get("http://alexandreapp.esy.es/DomesticaWebService/view/timeline/select_timeline.php").success(function(retorno){
  //  			for( var i in retorno){
  //  					$scope.timeline = retorno;
  //  					$scope.teste = retorno;
  //  			}
  // });


$http.post("http://localhost:8080/DomesticaWS/timeline/").success(function(retorno){
   			for( var i in retorno){
   					$scope.timeline = retorno;
   					$scope.teste = retorno;
   			}
  });
})


