<?php

include_once "model/Request.php";
include_once "model/estado_civil.php";
include_once "database/DBConnector.php";

class EstadoCivilController
{

    public function search($request)
    {
        $params = $request->get_params();
        $crit = $this->generateCriteria($params);

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        $result = $conn->query("SELECT * FROM tt_estado_civil WHERE ".$crit);

//        $result = $conn->query("SELECT ec.idt_estado_civil, func.nme_funcionario, ec.dsc_estado_civil
//                                          FROM tt_estado_civil ec, tb_funcionario func
//                                          where func.cod_estado_civil = ec.idt_estado_civil AND " . $crit);

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