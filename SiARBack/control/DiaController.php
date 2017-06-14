<?php

include_once "model/Request.php";
include_once "model/dia.php";
include_once "database/DBConnector.php";

class DiaController
{
    public function search($request)
    {
        $params = $request->get_params();
        $crit = $this->generateCriteria($params);

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        $result = $conn->query("SELECT * FROM tt_dia WHERE " . $crit);

//        $result = $conn->query("SELECT DISTINCT d.idt_dia, d.dsc_dia
//                                          FROM tt_dia d,
//                                               ta_turnos_funcionario funcT,
//                                               tb_funcionario func
//                                          WHERE funcT.cod_dia = d.idt_dia AND
//                                                func.cpf_funcionario = funcT.cod_funcionario AND " . $crit . " ORDER BY d.idt_dia");

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