angular.module("SiARBack").factory("principalAPI", function($http){
	var _getFuncionariosDoDia = function () {
		return $http.get("http://localhost/SiARBack/funcionario/?");
    };
    var _getFuncionario = function (cpf_funcionario) {
      return $http.get("http://localhost/SiARBack/funcionario/?" + cpf_funcionario);
  };
  return{
      getFuncionariosDoDia: _getFuncionariosDoDia,
      getFuncionario: _getFuncionario
};
});