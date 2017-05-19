<?php

class funcionario
{
    private $cpf_funcionario;
    private $nme_funcionario;
    private $dta_nasc_funcionario;
    private $cod_funcao;
    private $tel_funcionario;
    private $end_funcionario;
    private $cod_restaurante;
    private $pwd_funcionario;
    private $rg_funcionario;
    private $cod_estado_civil;
    private $cel_funcionario;
    private $sex_funcionario;
    private $cep_funcionario;
    private $end_nr_funcionario;
    private $img_funcionario;
    private $end_bairro_funcionario;
    private $end_cidade_funcionario;
    private $end_estado_funcionario;

    public function __construct($cpf_funcionario, $nme_funcionario, $dta_nasc_funcionario, $cod_funcao, $tel_funcionario,
                                $end_funcionario, $cod_restaurante, $pwd_funcionario, $rg_funcionario, $cod_estado_civil,
                                $cel_funcionario, $sex_funcionario, $cep_funcionario, $end_nr_funcionario, $img_funcionario,
                                $end_bairro_funcionario, $end_cidade_funcionario, $end_estado_funcionario)
    {
        $this->cpf_funcionario = $cpf_funcionario;
        $this->nme_funcionario = $nme_funcionario;
        $this->dta_nasc_funcionario = $dta_nasc_funcionario;
        $this->cod_funcao = $cod_funcao;
        $this->tel_funcionario = $tel_funcionario;
        $this->end_funcionario = $end_funcionario;
        $this->cod_restaurante = $cod_restaurante;
        $this->pwd_funcionario = $pwd_funcionario;
        $this->rg_funcionario = $rg_funcionario;
        $this->cod_estado_civil = $cod_estado_civil;
        $this->cel_funcionario = $cel_funcionario;
        $this->sex_funcionario = $sex_funcionario;
        $this->cep_funcionario = $cep_funcionario;
        $this->end_nr_funcionario = $end_nr_funcionario;
        $this->img_funcionario = $img_funcionario;
        $this->end_bairro_funcionario = $end_bairro_funcionario;
        $this->end_cidade_funcionario = $end_cidade_funcionario;
        $this->end_estado_funcionario = $end_estado_funcionario;
    }

    public function getCpfFuncionario()
    {
        return $this->cpf_funcionario;
    }

    public function setCpfFuncionario($cpf_funcionario)
    {
        $this->cpf_funcionario = $cpf_funcionario;
    }

    public function getNmeFuncionario()
    {
        return $this->nme_funcionario;
    }

    public function setNmeFuncionario($nme_funcionario)
    {
        $this->nme_funcionario = $nme_funcionario;
    }

    public function getDtaNascFuncionario()
    {
        return $this->dta_nasc_funcionario;
    }

    public function setDtaNascFuncionario($dta_nasc_funcionario)
    {
        $this->dta_nasc_funcionario = $dta_nasc_funcionario;
    }

    public function getCodFuncao()
    {
        return $this->cod_funcao;
    }

    public function setCodFuncao($cod_funcao)
    {
        $this->cod_funcao = $cod_funcao;
    }

    public function getTelFuncionario()
    {
        return $this->tel_funcionario;
    }

    public function setTelFuncionario($tel_funcionario)
    {
        $this->tel_funcionario = $tel_funcionario;
    }

    public function getEndFuncionario()
    {
        return $this->end_funcionario;
    }

    public function setEndFuncionario($end_funcionario)
    {
        $this->end_funcionario = $end_funcionario;
    }

    public function getCodRestaurante()
    {
        return $this->cod_restaurante;
    }

    public function setCodRestaurante($cod_restaurante)
    {
        $this->cod_restaurante = $cod_restaurante;
    }

    public function getPwdFuncionario()
    {
        return $this->pwd_funcionario;
    }

    public function setPwdFuncionario($pwd_funcionario)
    {
        $this->pwd_funcionario = $pwd_funcionario;
    }

    public function getRgFuncionario()
    {
        return $this->rg_funcionario;
    }

    public function setRgFuncionario($rg_funcionario)
    {
        $this->rg_funcionario = $rg_funcionario;
    }

    public function getCodEstadoCivil()
    {
        return $this->cod_estado_civil;
    }

    public function setCodEstadoCivil($cod_estado_civil)
    {
        $this->cod_estado_civil = $cod_estado_civil;
    }

    public function getCelFuncionario()
    {
        return $this->cel_funcionario;
    }

    public function setCelFuncionario($cel_funcionario)
    {
        $this->cel_funcionario = $cel_funcionario;
    }

    public function getSexFuncionario()
    {
        return $this->sex_funcionario;
    }

    public function setSexFuncionario($sex_funcionario)
    {
        $this->sex_funcionario = $sex_funcionario;
    }

    public function getCepFuncionario()
    {
        return $this->cep_funcionario;
    }

    public function setCepFuncionario($cep_funcionario)
    {
        $this->cep_funcionario = $cep_funcionario;
    }

    public function getEndNrFuncionario()
    {
        return $this->end_nr_funcionario;
    }

    public function setEndNrFuncionario($end_nr_funcionario)
    {
        $this->end_nr_funcionario = $end_nr_funcionario;
    }

    public function getImgFuncionario()
    {
        return $this->img_funcionario;
    }

    public function setImgFuncionario($img_funcionario)
    {
        $this->img_funcionario = $img_funcionario;
    }

    public function getEndBairroFuncionario()
    {
        return $this->end_bairro_funcionario;
    }

    public function setEndBairroFuncionario($end_bairro_funcionario)
    {
        $this->end_bairro_funcionario = $end_bairro_funcionario;
    }

    public function getEndCidadeFuncionario()
    {
        return $this->end_cidade_funcionario;
    }

    public function setEndCidadeFuncionario($end_cidade_funcionario)
    {
        $this->end_cidade_funcionario = $end_cidade_funcionario;
    }

    public function getEndEstadoFuncionario()
    {
        return $this->end_estado_funcionario;
    }

    public function setEndEstadoFuncionario($end_estado_funcionario)
    {
        $this->end_estado_funcionario = $end_estado_funcionario;
    }




}