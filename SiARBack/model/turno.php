<?php

class turno
{
    private $idt_turno;
    private $dsc_turno;

    public function __construct($idt_turno, $dsc_turno)
    {
        $this->idt_turno = $idt_turno;
        $this->dsc_turno = $dsc_turno;
    }

    public function getIdtTurno()
    {
        return $this->idt_turno;
    }

    public function setIdtTurno($idt_turno)
    {
        $this->idt_turno = $idt_turno;
    }

    public function getDscTurno()
    {
        return $this->dsc_turno;
    }

    public function setDscTurno($dsc_turno)
    {
        $this->dsc_turno = $dsc_turno;
    }



}