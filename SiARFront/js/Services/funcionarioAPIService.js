angular.module("SiAR").factory ("funcionarioAPI",function($http, config){

    var _postFuncionario = function(funcionario){
        return $http.post(config.baseUrl + "/funcionario/?cpf_funcionario=" + funcionario.cpf_funcionario + "&nme_funcionario="
            + funcionario.nme_funcionario + "&dta_nasc_funcionario=" + funcionario.dta_nasc_funcionario + "&cod_funcao="
            + funcionario.cod_funcao + "&tel_funcionario=" + funcionario.tel_funcionario + "&end_funcionario="
            + funcionario.end_funcionario + "&cod_restaurante=1&pwd_funcionario=" + funcionario.pwd_funcionario + "&rg_funcionario="
            + funcionario.rg_funcionario + "&cod_estado_civil=" + funcionario.cod_estado_civil + "&cel_funcionario="
            + funcionario.cel_funcionario + "&sex_funcionario=" + funcionario.sex_funcionario + "&cep_funcionario="
            + funcionario.cep_funcionario + "&end_nr_funcionario=" + funcionario.end_nr_funcionario + "&img_funcionario="
            + funcionario.img_funcionario + "&end_bairro_funcionario=" + funcionario.end_bairro_funcionario + "&end_cidade_funcionario="
            + funcionario.end_cidade_funcionario + "&end_estado_funcionario=" + funcionario.end_estado_funcionario)
	};

    var _putFuncionario = function(funcionario){
        return $http.put(config.baseUrl + "/funcionario/?cpf_funcionario=" + funcionario.cpf_funcionario + "&nme_funcionario="
            + funcionario.nme_funcionario + "&dta_nasc_funcionario=" + funcionario.dta_nasc_funcionario + "&cod_funcao="
            + funcionario.cod_funcao + "&tel_funcionario=" + funcionario.tel_funcionario + "&end_funcionario="
            + funcionario.end_funcionario + "&cod_restaurante=1&pwd_funcionario=" + funcionario.pwd_funcionario + "&rg_funcionario="
            + funcionario.rg_funcionario + "&cod_estado_civil=" + funcionario.cod_estado_civil + "&cel_funcionario="
            + funcionario.cel_funcionario + "&sex_funcionario=" + funcionario.sex_funcionario + "&cep_funcionario="
            + funcionario.cep_funcionario + "&end_nr_funcionario=" + funcionario.end_nr_funcionario + "&img_funcionario="
            + funcionario.img_funcionario + "&end_bairro_funcionario=" + funcionario.end_bairro_funcionario + "&end_cidade_funcionario="
            + funcionario.end_cidade_funcionario + "&end_estado_funcionario=" + funcionario.end_estado_funcionario)
    };

    var _getFuncionario = function (cpf_funcionario) {
        return $http.get(config.baseUrl + "/funcionario/?cpf_funcionario=" + cpf_funcionario);
    };

    var _getFuncionarios = function () {
        return $http.get(config.baseUrl + "/funcionario/?");
    };

	var _deleteCadastro = function (cpf_funcionario) {
		return $http.delete(config.baseUrl + "/funcionario/?cpf_funcionario=" + cpf_funcionario);
	};

	var _getEstadoCivil = function () {
        return $http.get(config.baseUrl + "/estado_civil/?");
    };
  
    var _getFuncao = function () {
        return $http.get(config.baseUrl + "/funcao/?");
    };

	var _getRestaurante = function () {
        return $http.get(config.baseUrl + "/restaurante/?");
    };


    var _deleteFuncTurn = function (idt_turnos_funcionario) {
        return $http.delete(config.baseUrl + "/turnos_funcionario/?idt_turnos_funcionario=" + idt_turnos_funcionario);
    };
  
    // var _getFuncEstadoCivil = function (cpf_funcionario) {
    //     return $http.get(config.baseUrl + "/estado_civil/?cpf_funcionario=" + cpf_funcionario)
    // };
    //
    // var _getFuncRest = function (cpf_funcionario) {
    //     return $http.get(config.baseUrl + "/restaurante/?cpf_funcionario=" + cpf_funcionario)
    // };
    //
    // var _getFuncFuncao = function (cpf_funcionario) {
    //     return $http.get(config.baseUrl + "/funcao/?cpf_funcionario=" + cpf_funcionario)
    // };

    var _getFuncDia = function (cpf_funcionario) {
        return $http.get(config.baseUrl + "/dia/?cpf_funcionario=" + cpf_funcionario)
    };

    var _getFuncTurno = function (cpf_funcionario) {
        return $http.get(config.baseUrl + "/turno/?cpf_funcionario=" + cpf_funcionario)
    };

    var _getTurnosFuncionario = function (cpf_funcionario) {
        return $http.get(config.baseUrl + "/turnos_funcionario/?cpf_funcionario=" + cpf_funcionario);
    };

    var _getDias = function () {
        return $http.get(config.baseUrl + "/dia/?");
    };

    var _getTurnos = function () {
        return $http.get(config.baseUrl + "/turno/?");
    };


    var _postTurnosFuncionario = function (turnos_funcionario) {
        return $http.post(config.baseUrl + "/turnos_funcionario/?idt_turnos_funcionario=1&cod_funcionario=" +
            turnos_funcionario.cod_funcionario + "&cod_turno=" + turnos_funcionario.cod_turno + "&cod_dia=" +
            turnos_funcionario.cod_dia);
    };

    var _putTurnosFuncionario = function (turnos_funcionario) {
        return $http.put(config.baseUrl + "/turnos_funcionario/?idt_turnos_funcionario"+ turnos_funcionario.idt_turnos_funcionario+"&cod_funcionario=" +
            turnos_funcionario.cod_funcionario + "&cod_turno=" + turnos_funcionario.cod_turno + "&cod_dia=" +
            turnos_funcionario.cod_dia);
    };

    var _login = function(funcionario){
        return $http.get(config.baseUrl + "/funcionario/?cpf_funcionario=" + funcionario.cpf_funcionario +
                                                               "&cod_funcao=1&pwd_funcionario=" + funcionario.pwd_funcionario);
    };
	return {
        getFuncionario: _getFuncionario,
        getFuncionarios: _getFuncionarios,
        postFuncionario: _postFuncionario,
        putFuncionario: _putFuncionario,
        deleteCadastro: _deleteCadastro,
        deleteFuncTurn: _deleteFuncTurn,
        getEstadoCivil: _getEstadoCivil,
        getFuncao: _getFuncao,
        getRestaurante: _getRestaurante,
      //  getFuncEstadoCivil: _getFuncEstadoCivil,
      //   getFuncRest: _getFuncRest,
      //   getFuncFuncao: _getFuncFuncao,
        getFuncDia: _getFuncDia,
        getFuncTurno: _getFuncTurno,
        getDias: _getDias,
        getTurnos: _getTurnos,
        getTurnosFuncionario: _getTurnosFuncionario,
        postTurnosFuncionario: _postTurnosFuncionario,
        putTurnosFuncionario: _putTurnosFuncionario,
        login: _login
	};
});