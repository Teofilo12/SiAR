angular.module('SiAR.services', [])

.service('LoginService', function($q, $http) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;


            $http.post('http://localhost:8080/DomesticaWS/login/?email_login='+name+'&psw_login='+pw)
            .success(function(retorno){
                if(retorno != 0){
                    deferred.resolve('Welcome ' + retorno[0]['nme_person'] + '!');    
                }else{
                   deferred.reject('Wrong credentials.');     
               }
           });
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})


.factory ("pontoEletronicoAPI",function($http,$filter){

        var _postComPontoEntrada = function(ponto_eletronico){
            return $http.post("http://localhost/SiARBack/ponto_eletronico/?idt_ponto_eletronico=1&cod_funcionario="
                + ponto_eletronico.cod_funcionario + "&ponto_hr_entrada="
                + ponto_eletronico.ponto_hr_entrada + "&ponto_hr_saida=" + ponto_eletronico.ponto_hr_saida)
        };


    diaBatido = $filter('date')(new Date(), 'yyyy-MM-dd');

        var _getPontoEntradaDoDia = function (ponto_eletronico) {
              return $http.get("http://localhost/SiARBack/ponto_eletronico/?cod_funcionario=" + ponto_eletronico.cod_funcionario
                  + "&ponto_hr_entrada=" + diaBatido);
        };

        var _putComPontoSaida = function(ponto_eletronico){
            return $http.put("http://localhost/SiARBack/ponto_eletronico/?cod_funcionario="
                + ponto_eletronico.cod_funcionario + "&ponto_hr_entrada=" + diaBatido + "&ponto_hr_saida="
                + ponto_eletronico.ponto_hr_saida)
        };

        return {
            getPontoEntradaDoDia: _getPontoEntradaDoDia,
            postComPontoEntrada: _postComPontoEntrada,
            putComPontoSaida: _putComPontoSaida
        };
    })

.factory ("funcionarioAPI",function($http){

    var _getFuncionarios = function () {
        return $http.get("http://localhost/SiARBack/funcionario/?");
    };

        var _login = function(ponto_eletronico){
            return $http.get("http://localhost/SiARBack/funcionario/?cpf_funcionario=" + ponto_eletronico.cpf_funcionario +
                "&cod_funcao=1&pwd_funcionario=" + ponto_eletronico.pwd_funcionario);
        };
        return {
            getFuncionarios: _getFuncionarios,
            login: _login
        };
})

.factory ("cardapioAPI",function($http){

        var _getItensDoCardapio = function () {
            return $http.get("http://localhost/SiARBack/cardapio/?");
        }
        return {
            getItensDoCardapio: _getItensDoCardapio
        };
    });

// **********************************************************************************
// angular.module('starter.services', [])

// .service('LoginService', function($q) {
//     return {
//         loginUser: function(name, pw) {
//             var deferred = $q.defer();
//             var promise = deferred.promise;

//             if (name == 'user' && pw == 'secret') {
//                 deferred.resolve('Welcome ' + name + '!');
//             } else {
//                 deferred.reject('Wrong credentials.');
//             }
//             promise.success = function(fn) {
//                 promise.then(fn);
//                 return promise;
//             }
//             promise.error = function(fn) {
//                 promise.then(null, fn);
//                 return promise;
//             }
//             return promise;
//         }
//     }
// })
