app.controller('TarefasCtrl', function($scope) {

  $scope.tarefa = {};
  $scope.salvar = function(){
    var nmeTarefa = $scope.tarefa.nameTask;
    var data = $scope.tarefa.date;
    console.log(data);
    
    
  };
})


