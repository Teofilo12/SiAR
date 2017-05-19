<?php

class categoria
{
    private $idt_categoria;
    private $dsc_categoria;

    public function __construct($idt_categoria, $dsc_categoria)
    {
        $this->idt_categoria = $idt_categoria;
        $this->dsc_categoria = $dsc_categoria;
    }

    public function getIdtCategoria()
    {
        return $this->idt_categoria;
    }

    public function setIdtCategoria($idt_categoria)
    {
        $this->idt_categoria = $idt_categoria;
    }

    public function getDscCategoria()
    {
        return $this->dsc_categoria;
    }

    public function setDscCategoria($dsc_categoria)
    {
        $this->dsc_categoria = $dsc_categoria;
    }



}