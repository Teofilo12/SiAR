<?php

class ponto_eletronico
{
    private $idt_ponto_eletronico;
    private $cod_funcionario;
    private $ponto_hr_entrada;
    private $ponto_hr_saida;

    public function __construct($idt_ponto_eletronico, $cod_funcionario, $ponto_hr_entrada, $ponto_hr_saida)
    {
        $this->idt_ponto_eletronico = $idt_ponto_eletronico;
        $this->cod_funcionario = $cod_funcionario;
        $this->ponto_hr_entrada = $ponto_hr_entrada;
        $this->ponto_hr_saida = $ponto_hr_saida;
    }

    public function getIdtPontoEletronico()
    {
        return $this->idt_ponto_eletronico;
    }

    public function setIdtPontoEletronico($idt_ponto_eletronico)
    {
        $this->idt_ponto_eletronico = $idt_ponto_eletronico;
    }

    public function getCodFuncionario()
    {
        return $this->cod_funcionario;
    }

    public function setCodFuncionario($cod_funcionario)
    {
        $this->cod_funcionario = $cod_funcionario;
    }

    public function getPontoHrEntrada()
    {
        return $this->ponto_hr_entrada;
    }

    public function setPontoHrEntrada($ponto_hr_entrada)
    {
        $this->ponto_hr_entrada = $ponto_hr_entrada;
    }

    public function getPontoHrSaida()
    {
        return $this->ponto_hr_saida;
    }

    public function setPontoHrSaida($ponto_hr_saida)
    {
        $this->ponto_hr_saida = $ponto_hr_saida;
    }

}