<?php

class dia
{
    private $idt_dia;
    private $dsc_dia;

    public function __construct($idt_dia, $dsc_dia)
    {
        $this->idt_dia = $idt_dia;
        $this->dsc_dia = $dsc_dia;
    }

    public function getIdtDia()
    {
        return $this->idt_dia;
    }

    public function setIdtDia($idt_dia)
    {
        $this->idt_dia = $idt_dia;
    }

    public function getDscDia()
    {
        return $this->dsc_dia;
    }

    public function setDscDia($dsc_dia)
    {
        $this->dsc_dia = $dsc_dia;
    }



}