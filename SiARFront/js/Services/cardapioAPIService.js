angular.module("SiARBack").factory ("cardapioAPI",function($http){
    var _cadastrarItemNoCardapio = function(cardapio){
        return $http.post("http://localhost/SiARBack/cardapio/?idt_cardapio=1&itm_cardapio="
            + cardapio.itm_cardapio + "&cod_categoria=" + cardapio.cod_categoria + "&cod_restaurante=1&vlr_itm_cardapio="
            + cardapio.vlr_itm_cardapio + "&img_cardapio="
            + cardapio.img_cardapio + "&dsc_itm_cardapio=" + cardapio.dsc_itm_cardapio)
    };
    return {
        cadastrarItemNoCardapio: _cadastrarItemNoCardapio
    };
});