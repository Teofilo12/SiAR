<?php


class turnos_funcionario
{
    private $idt_turnos_funcionario;
    private $cod_funcionario;
    private $cod_dia;
    private $cod_turno;


    public function __construct($idt_turnos_funcionario, $cod_funcionario, $cod_dia, $cod_turno)
    {
        $this->idt_turnos_funcionario = $idt_turnos_funcionario;
        $this->cod_funcionario = $cod_funcionario;
        $this->cod_dia = $cod_dia;
        $this->cod_turno = $cod_turno;
    }

    public function getIdtTurnosFuncionario()
    {
        return $this->idt_turnos_funcionario;
    }

    public function setIdtTurnosFuncionario($idt_turnos_funcionario)
    {
        $this->idt_turnos_funcionario = $idt_turnos_funcionario;
    }

    public function getCodFuncionario()
    {
        return $this->cod_funcionario;
    }

    public function setCodFuncionario($cod_funcionario)
    {
        $this->cod_funcionario = $cod_funcionario;
    }

    public function getCodDia()
    {
        return $this->cod_dia;
    }

    public function setCodDia($cod_dia)
    {
        $this->cod_dia = $cod_dia;
    }

    public function getCodTurno()
    {
        return $this->cod_turno;
    }

    public function setCodTurno($cod_turno)
    {
        $this->cod_turno = $cod_turno;
    }

}