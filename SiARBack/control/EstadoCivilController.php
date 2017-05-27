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

        $result = $conn->query("SELECT * FROM tt_estado_civil WHERE " . $crit);

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