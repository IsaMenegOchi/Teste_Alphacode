<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Content-Type: applicatiopn/json");

    require_once("./Connection.php");
    require_once("./models/PersonModel.php");
    require_once("./controllers/PersonController.php");


    //representa uma connecion de php
    $connection = new Connection();

    $modelPerson = new PersonModel($connection->returnConnection());
    $controllerPerson = new PersonController($modelPerson);

    $dados = $controllerPerson->router();

    echo json_encode(array("status"=>"Success","data"=>$dados));

?>