<?php

class estado_civil
{
    private $idt_estado_civil;
    private $dsc_estado_civil;

    public function __construct($idt_estado_civil, $dsc_estado_civil)
    {
        $this->idt_estado_civil = $idt_estado_civil;
        $this->dsc_estado_civil = $dsc_estado_civil;
    }

    public function getIdtEstadoCivil()
    {
        return $this->idt_estado_civil;
    }

    public function setIdtEstadoCivil($idt_estado_civil)
    {
        $this->idt_estado_civil = $idt_estado_civil;
    }

    public function getDscEstadoCivil()
    {
        return $this->dsc_estado_civil;
    }

    public function setDscEstadoCivil($dsc_estado_civil)
    {
        $this->dsc_estado_civil = $dsc_estado_civil;
    }



}