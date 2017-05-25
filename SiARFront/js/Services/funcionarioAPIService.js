angular.module("SiARBack").factory ("funcionarioAPI",function($http){
	var _cadastrarFuncionario = function(funcionario){
		return $http.post("http://localhost/SiARBack/funcionario/?cpf_funcionario=" + funcionario.cpf_funcionario + "&nme_funcionario="
				+ funcionario.nme_funcionario + "&dta_nasc_funcionario=" + funcionario.dta_nasc_funcionario + "&cod_funcao="
			    + funcionario.cod_funcao + "&tel_funcionario=" + funcionario.tel_funcionario + "&end_funcionario="
			    + funcionario.end_funcionario + "&cod_restaurante=1&pwd_funcionario=" + funcionario.pwd_funcionario + "&rg_funcionario="
			    + funcionario.rg_funcionario + "&cod_estado_civil=" + funcionario.cod_estado_civil + "&cel_funcionario="
			    + funcionario.cel_funcionario + "&sex_funcionario=" + funcionario.sex_funcionario + "&cep_funcionario="
			    + funcionario.cep_funcionario + "&end_nr_funcionario=" + funcionario.end_nr_funcionario + "&img_funcionario="
			    + funcionario.img_funcionario)
	}; /*
	var _cadastrarFuncionario = function(funcionario){
		return $http.put("http://localhost/SiAR/funcionario/?cpf_funcionario=" + funcionario.cpf_funcionario + "&first_name="
			+ usuario.first_name + "&last_name=" + usuario.last_name + "&email=" + 
			usuario.email + "&birthdate=" + usuario.birthdate + "&senha=" + usuario.senha + 
			"&cod_perfil=1")
	}; */
	var _deletePerfil = function (cpf_funcionario) {
		console.log(cpf_funcionario);
		return $http.delete("http://localhost/SiARBack/funcionario/?cpf_funcionario=" + cpf_funcionario);
	};
	return {
        cadastrarFuncionario: _cadastrarFuncionario,
		deletePerfil: _deletePerfil
	};
});