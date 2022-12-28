<?php
    class PersonController{

        //guardamos qual metodo esta vindo
        private $method;
        //m
        private $modelPerson;

        private $idPerson;
        
        public function __construct($model)
        {
            $this->modelPerson = $model;

            //esse sabe qual o meotodo que esta vindo
            $this->method = $_SERVER["REQUEST_METHOD"];

            $this->idPerson = $_GET["idPerson"] ?? null;
            
        }
        
        function router(){

            switch ($this->method) {
                case "GET":
                    
                    if(isset($this->idPerson)){
                
                        return $this->modelPerson->findById();
                    }

                    return $this->modelPerson->findAll();
                break;
                
                case "POST":
                    return $this->modelPerson->create();
                break;

                case "PUT";
                    var_dump("entrei aq no put");
                    return $this->modelPerson->update();
                break;
                
                case "DELETE":
                    return $this->modelPerson->delete();
                break;
            
                default:
                return "Default";
                break;
            }
        }
    }
?>