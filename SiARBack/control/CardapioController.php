<?php

include_once "model/Request.php";
include_once "model/cardapio.php";
include_once "database/DBConnector.php";

class CardapioController
{

    public function register($request)
    {
        $params = $request->get_params();
        $menu = new cardapio
        (
            $params["idt_cardapio"],
            $params["itm_cardapio"],
            $params["cod_categoria"],
            $params["cod_restaurante"],
            $params["vlr_itm_cardapio"],
            $params["img_cardapio"],
            $params["dsc_itm_cardapio"]
        );

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        return $conn->query($this->generateInsertQuery($menu));
    }

    public function generateInsertQuery($menu)
    {
        $query = "INSERT INTO ta_cardapio (idt_cardapio,itm_cardapio,cod_categoria,cod_restaurante,vlr_itm_cardapio
                                           img_cardapio,dsc_itm_cardapio)
                  VALUES
                        ('".$menu->getIdtCardapio()."','".$menu->getItmCardapio().$menu->getCodCategoria."','".
                            $menu->getCodRestaurante()."','".$menu->getVlrItmCardapio()."','".$menu->getImgCardapio()."','".
                            $menu->getDscItmCardapio()."')";

        return $query;
    }

    public function search($request)
    {
        $params = $request->get_params();
        $crit = $this->generateCriteria($params);

        $db = new DBConnector("localhost", "bd_siar", "mysql", "", "root", "");

        $conn = $db->getConnection();

        $result = $conn->query("SELECT * FROM ta_cardapio WHERE 1=1 AND ".$crit);

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

        return "UPDATE ta_cardapio SET " . $crit . " WHERE idt_cardapio = '" . $params["idt_cardapio"] . "'";
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

        $result = $conn->prepare("DELETE FROM ta_cardapio WHERE idt_cardapio = ?");

        $result->bindParam(1, $params['idt_cardapio']);

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