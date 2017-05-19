<?php

class funcao
{
    private  $idt_funcao;
    private $dsc_funcao;

    public function __construct($idt_funcao, $dsc_funcao)
    {
        $this->idt_funcao = $idt_funcao;
        $this->dsc_funcao = $dsc_funcao;
    }

    public function getIdtFuncao()
    {
        return $this->idt_funcao;
    }

    public function setIdtFuncao($idt_funcao)
    {
        $this->idt_funcao = $idt_funcao;
    }

    public function getDscFuncao()
    {
        return $this->dsc_funcao;
    }

    public function setDscFuncao($dsc_funcao)
    {
        $this->dsc_funcao = $dsc_funcao;
    }



}