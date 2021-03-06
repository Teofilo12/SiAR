<?php

include_once "model/Request.php";
include_once "model/funcao.php";
include_once "database/DBConnector.php";

class FuncaoController
{

    public function register($request)
    {
        $params = $request->get_params();
        $func = new funcao
        (
            $params["idt_funcao"],
            $params["dsc_funcao"]
        );

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        return $conn->query($this->generateInsertQuery($func));
    }

    public function generateInsertQuery($func)
    {
        $query =  "INSERT INTO tt_funcao (idt_funcao, dsc_funcao) 
                   VALUES   ('".$func->getIdtFuncao()."','".
                                $func->getDscFuncao()."')";

        return $query;
    }

    public function search($request)
    {
        $params = $request->get_params();
        $crit = $this->generateCriteria($params);

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        $result = $conn->query("SELECT * FROM tt_funcao WHERE " . $crit);

        return ($result->fetchAll(PDO::FETCH_ASSOC));

    }

    private function generateCriteria($params)
    {
        $criteria = "";
        foreach ($params as $key => $value) {
            $criteria = $criteria . $key . " LIKE '%" . $value . "%' ";
        }
        return $criteria;
    }

}