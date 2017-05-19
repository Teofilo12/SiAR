<?php

class restaurante
{
    private $cnpj_restaurante;
    private $nme_restaurante;
    private $end_restaurante;
    private $gel_local;

    public function __construct($cnpj_restaurante, $nme_restaurante, $end_restaurante, $gel_local)
    {
        $this->cnpj_restaurante = $cnpj_restaurante;
        $this->nme_restaurante = $nme_restaurante;
        $this->end_restaurante = $end_restaurante;
        $this->gel_local = $gel_local;
    }

    public function getCnpjRestaurante()
    {
        return $this->cnpj_restaurante;
    }

    public function setCnpjRestaurante($cnpj_restaurante)
    {
        $this->cnpj_restaurante = $cnpj_restaurante;
    }

    public function getNmeRestaurante()
    {
        return $this->nme_restaurante;
    }

    public function setNmeRestaurante($nme_restaurante)
    {
        $this->nme_restaurante = $nme_restaurante;
    }

    public function getEndRestaurante()
    {
        return $this->end_restaurante;
    }

    public function setEndRestaurante($end_restaurante)
    {
        $this->end_restaurante = $end_restaurante;
    }

    public function getGelLocal()
    {
        return $this->gel_local;
    }

    public function setGelLocal($gel_local)
    {
        $this->gel_local = $gel_local;
    }


}