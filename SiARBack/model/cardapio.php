<?php


class cardapio
{

    private $idt_cardapio;
    private $itm_cardapio;
    private $cod_categoria;
    private $cod_restaurante;
    private $vlr_itm_cardapio;
    private $img_cardapio;
    private $dsc_itm_cardapio;

    public function __construct($idt_cardapio, $itm_cardapio, $cod_categoria, $cod_restaurante, $vlr_itm_cardapio, $img_cardapio, $dsc_itm_cardapio)
    {
        $this->idt_cardapio = $idt_cardapio;
        $this->itm_cardapio = $itm_cardapio;
        $this->cod_categoria = $cod_categoria;
        $this->cod_restaurante = $cod_restaurante;
        $this->vlr_itm_cardapio = $vlr_itm_cardapio;
        $this->img_cardapio = $img_cardapio;
        $this->dsc_itm_cardapio = $dsc_itm_cardapio;
    }

    public function getIdtCardapio()
    {
        return $this->idt_cardapio;
    }

    public function setIdtCardapio($idt_cardapio)
    {
        $this->idt_cardapio = $idt_cardapio;
    }

    public function getItmCardapio()
    {
        return $this->itm_cardapio;
    }

    public function setItmCardapio($itm_cardapio)
    {
        $this->itm_cardapio = $itm_cardapio;
    }

    public function getCodCategoria()
    {
        return $this->cod_categoria;
    }

    public function setCodCategoria($cod_categoria)
    {
        $this->cod_categoria = $cod_categoria;
    }

    public function getCodRestaurante()
    {
        return $this->cod_restaurante;
    }

    public function setCodRestaurante($cod_restaurante)
    {
        $this->cod_restaurante = $cod_restaurante;
    }

    public function getVlrItmCardapio()
    {
        return $this->vlr_itm_cardapio;
    }

    public function setVlrItmCardapio($vlr_itm_cardapio)
    {
        $this->vlr_itm_cardapio = $vlr_itm_cardapio;
    }

    public function getImgCardapio()
    {
        return $this->img_cardapio;
    }

    public function setImgCardapio($img_cardapio)
    {
        $this->img_cardapio = $img_cardapio;
    }

    public function getDscItmCardapio()
    {
        return $this->dsc_itm_cardapio;
    }

    public function setDscItmCardapio($dsc_itm_cardapio)
    {
        $this->dsc_itm_cardapio = $dsc_itm_cardapio;
    }


}