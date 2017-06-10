<?php

include_once "model/Request.php";
include_once "model/turno.php";
include_once "database/DBConnector.php";

class TurnoController
{
    public function search($request)
    {
        $params = $request->get_params();
        $crit = $this->generateCriteria($params);

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        $result = $conn->query("SELECT * FROM tt_turno WHERE " . $crit);

//        $result = $conn->query("SELECT DISTINCT t.idt_turno, t.dsc_turno
//                                          FROM tt_turno t,
//                                               ta_turnos_funcionario funcT,
//                                               tb_funcionario func
//                                          WHERE funcT.cod_funcionario = func.cpf_funcionario AND
//                                                funcT.cod_turno = t.idt_turno AND " . $crit . " ORDER BY t.idt_turno");

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