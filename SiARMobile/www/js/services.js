angular.module('SiAR.services', [])
// angular.module('SiAR.services', ['ngCordova'])


.factory ("pontoEletronicoAPI",function($http,$filter){

        var _postComPontoEntrada = function(ponto_eletronico){
            return $http.post("http://localhost/SiARBack/ponto_eletronico/?idt_ponto_eletronico=1&cod_funcionario="
                + ponto_eletronico.cod_funcionario + "&ponto_hr_entrada="
                + ponto_eletronico.ponto_hr_entrada + "&ponto_hr_saida=" + ponto_eletronico.ponto_hr_saida)
        };


    diaBatido = $filter('date')(new Date(), 'yyyy-MM-dd');

        var _getPontoEntradaDoDia = function (cpf_funcionario) {
              return $http.get("http://localhost/SiARBack/ponto_eletronico/?cod_funcionario=" + cpf_funcionario
                  + "&ponto_hr_entrada=" + diaBatido);
        };

        var _getPontoSaidaDoDia = function (cpf_funcionario) {
            return $http.get("http://localhost/SiARBack/ponto_eletronico/?cod_funcionario=" + cpf_funcionario
                + "&ponto_hr_saida=" + diaBatido);
        };

        var _putComPontoSaida = function(ponto_eletronico){
            return $http.put("http://localhost/SiARBack/ponto_eletronico/?cod_funcionario="
                + ponto_eletronico.cod_funcionario + "&ponto_hr_saida="
                + ponto_eletronico.ponto_hr_saida)
        };

        return {
            getPontoEntradaDoDia: _getPontoEntradaDoDia,
            getPontoSaidaDoDia: _getPontoSaidaDoDia,
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
    })

.factory('GeoAlert', function() {
        console.log('GeoAlert service instantiated');
        var interval;
        var duration = 6000;
        var long, lat;
        var processing = false;
        var callback;
        var minDistance = 40;

        // Credit: http://stackoverflow.com/a/27943/52160
        function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2-lat1);  // deg2rad below
            var dLon = deg2rad(lon2-lon1);
            var a =
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon/2) * Math.sin(dLon/2)
            ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c; // Distance in km
            return d;
        }

        function deg2rad(deg) {
            return deg * (Math.PI/180)
        }

        function hb() {
            console.log('hb running');
            if(processing) return;
            processing = true;
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log('entrei aqui');
                processing = false;
                console.log(lat, long);
                console.log(position.coords.latitude, position.coords.longitude);
                var dist = getDistanceFromLatLonInKm(lat, long, position.coords.latitude, position.coords.longitude);
                console.log("dist in km is "+dist);
                if(dist <= minDistance) callback();
            });
        }

        return {
            begin:function(lt,lg,cb) {
                long = lg;
                lat = lt;
                callback = cb;
                interval = window.setInterval(hb, duration);
                hb();
            },
            end: function() {
                window.clearInterval(interval);
            },
            setTarget: function(lg,lt) {
                long = lg;
                lat = lt;
            }
        };

    });
