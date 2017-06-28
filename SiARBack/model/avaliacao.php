<?php

class avaliacao {

    private $idt_avaliacao;
    private $cod_funcionario;
    private $nta_avaliacao;
    private $txt_cliente;

    public function __construct($idt_avaliacao, $cod_funcionario, $nta_avaliacao, $txt_cliente)
    {
        $this->idt_avaliacao = $idt_avaliacao;
        $this->cod_funcionario = $cod_funcionario;
        $this->nta_avaliacao = $nta_avaliacao;
        $this->txt_cliente = $txt_cliente;
    }

    public function getIdtAvaliacao()
    {
        return $this->idt_avaliacao;
    }

    public function setIdtAvaliacao($idt_avaliacao)
    {
        $this->idt_avaliacao = $idt_avaliacao;
    }

    public function getCodFuncionario()
    {
        return $this->cod_funcionario;
    }

    public function setCodFuncionario($cod_funcionario)
    {
        $this->cod_funcionario = $cod_funcionario;
    }

    public function getNtaAvaliacao()
    {
        return $this->nta_avaliacao;
    }

    public function setNtaAvaliacao($nta_avaliacao)
    {
        $this->nta_avaliacao = $nta_avaliacao;
    }

    public function getTxtCliente()
    {
        return $this->txt_cliente;
    }

    public function setTxtCliente($txt_cliente)
    {
        $this->txt_cliente = $txt_cliente;
    }



}