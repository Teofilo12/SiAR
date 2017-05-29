angular.module("SiARBack").factory("listFuncionariosAPI", function($http){
	var _getFuncionarios = function () {
		return $http.get("http://localhost/SiARBack/funcionario/?");
    };
	var _getFuncoes = function () {
        return $http.get("http://localhost/SiARBack/funcao/?");
    };
    var _getFuncionario = function (cpf_funcionario) {
      return $http.get("http://localhost/SiARBack/funcionario/?cpf_funcionario=" + cpf_funcionario);
  };
  var _login = function(funcionario){
      return $http.get("http://localhost/SiARBack/funcionario/?cpf_funcionario=" + funcionario.cpf_funcionario +
                                                              "&pwd_funcionario=" + funcionario.pwd_funcionario);
  };
  return{
      getFuncionarios: _getFuncionarios,
      getFuncoes: _getFuncoes,
      getFuncionario: _getFuncionario,
      login: _login
};
});