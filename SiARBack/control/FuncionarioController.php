<?php

include_once "model/Request.php";
include_once "model/funcionario.php";
include_once "database/DBConnector.php";

class FuncionarioController
{
    public function register($request)
    {
        $params = $request->get_params();
        $employee = new funcionario
           ($params["cpf_funcionario"],
            $params["nme_funcionario"],
            $params["dta_nasc_funcionario"],
            $params["cod_funcao"],
            $params["tel_funcionario"],
            $params["end_funcionario"],
            $params["cod_restaurante"],
            $params["pwd_funcionario"],
            $params["rg_funcionario"],
            $params["cod_estado_civil"],
            $params["cel_funcionario"],
            $params["sex_funcionario"],
            $params["cep_funcionario"],
            $params["end_nr_funcionario"],
            $params["img_funcionario"],
            $params["end_bairro_funcionario"],
            $params["end_cidade_funcionario"],
            $params["end_estado_funcionario"]);

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();


        return $conn->query($this->generateInsertQuery($employee));
    }

    private function generateInsertQuery($employee)
    {
        $query =  "INSERT INTO tb_funcionario (cpf_funcionario, nme_funcionario, dta_nasc_funcionario, cod_funcao, 
                                               tel_funcionario, end_funcionario, cod_restaurante, 
                                               pwd_funcionario, rg_funcionario, cod_estado_civil, 
                                               cel_funcionario, sex_funcionario, cep_funcionario,
                                               end_nr_funcionario, img_funcionario, end_bairro_funcionario,
                                               end_cidade_funcionario,end_estado_funcionario) 
                   VALUES   ('".$employee->getCpfFuncionario()."','".
                                $employee->getNmeFuncionario()."','".
                                $employee->getDtaNascFuncionario()."','".
                                $employee->getCodFuncao()."','".
                                $employee->getTelFuncionario()."','".
                                $employee->getEndFuncionario()."','".
                                $employee->getCodRestaurante()."','".
                                $employee->getPwdFuncionario()."','".
                                $employee->getRgFuncionario()."','".
                                $employee->getCodEstadoCivil()."','".
                                $employee->getCelFuncionario()."','".
                                $employee->getSexFuncionario()."','".
                                $employee->getCepFuncionario()."','".
                                $employee->getEndNrFuncionario()."','".
                                $employee->getImgFuncionario()."','".
                                $employee->getEndBairroFuncionario()."','".
                                $employee->getEndCidadeFuncionario()."','".
                                $employee->getEndEstadoFuncionario()."')";

        return $query;
    }

    public function search($request)
    {
        $params = $request->get_params();
        $crit = $this->generateCriteria($params);

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        $result = $conn->query("SELECT * FROM tb_funcionario func WHERE ".$crit);

        return $result->fetchAll(PDO::FETCH_ASSOC);

    }

    private function generateCriteria($params)
    {
        $criteria = "";
        foreach($params as $key => $value)
        {
            $criteria = $criteria.$key." LIKE '%".$value."%' AND ";
        }

        return substr($criteria, 0, -4);
    }

    public function update($request)
    {
        $params = $request->get_params();

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        return $conn->query($this->generateUpdateQuery($params));
    }

    private function generateUpdateQuery($params)
    {
        $crit = $this->generateUpdateCriteria($params);

        return "UPDATE tb_funcionario SET " . $crit . " WHERE cpf_funcionario = '" . $params["cpf_funcionario"] . "'";
    }

    private function generateUpdateCriteria($params)
    {
        $criteria = "";
        foreach ($params as $key => $value)
        {
            $criteria = $criteria.$key." = '".$value."' ,";
        }

        return substr($criteria, 0, -2);
    }

    public function remove($request)
    {
        $params = $request->get_params();

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        $result = $conn->prepare("DELETE FROM tb_funcionario WHERE cpf_funcionario = ?");

        $result->bindParam(1, $params['cpf_funcionario']);

        $result->execute();

        return $result;
    }

    private function isValid($parameters)
    {
        $keys = array_keys($parameters);
        $diff1 = array_diff($keys, $this->requiredParameters);
        $diff2 = array_diff($this->requiredParameters, $keys);
        if (empty($diff2) && empty($diff1))
            return false;
    }
}