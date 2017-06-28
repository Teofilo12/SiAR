<?php

include_once "model/Request.php";
include_once "model/avaliacao.php";
include_once "database/DBConnector.php";

class AvaliacaoController {

    public function register($request)
    {
        $params = $request->get_params();
        $menu = new avaliacao
        (
            $params["idt_avaliacao"],
            $params["cod_funcionario"],
            $params["nta_avaliacao"],
            $params["txt_cliente"]
        );

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        return $conn->query($this->generateInsertQuery($menu));
    }

    public function generateInsertQuery($menu)
    {
        $query = "INSERT INTO tb_avaliacao (cod_funcionario,nta_avaliacao,txt_cliente)
                  VALUES
                                ('".$menu->getCodFuncionario()."','".
                                    $menu->getNtaAvaliacao()."','".
                                    $menu->getTxtCliente()."')";

        return $query;
    }

    public function search($request)
    {
        $params = $request->get_params();
        $crit = $this->generateCriteria($params);

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        $result = $conn->query("SELECT * FROM tb_avaliacao WHERE ".$crit);

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

}