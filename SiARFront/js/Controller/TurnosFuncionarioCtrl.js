angular.module("SiAR").controller("TurnosFuncionarioCtrl", function ($scope, $http, $routeParams, turnos_funcionario, funcionarioAPI)
{
    $scope.turnos_funcionario = turnos_funcionario.data;

       //
       // funcionarioAPI.getTurnos().success(function (data) {
       //      $scope.turno = data;
       //  });

    $scope.deleteTurno = function (idt_turnos_funcionario) {
        funcionarioAPI.deleteFuncTurn(idt_turnos_funcionario).success(function (data) {
            alert(idt_turnos_funcionario);
            // console.log('Chegou aqui!');
        });
    };


});