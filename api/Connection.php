<?php

    //nomes das clases devem ter o mesmo nome do arquivo
        class Connection{

            //devemos declara os atributos
            //a visibilidade define o nivel de visibilidade entro de uma classe
            //notação grafica para sinalizar que ele é um atributo e tbm saber que é private
            private $_host = "127.0.0.1"; //ou 127.0.0.1
            private $_dbName = "teste_alphacode";
            private $_userName = "root";
            private $_dbPassaword = '0FF$et08';
            private $connection;

            public function __construct()
        {
            //tente fazer algo
            try{
                //essa conexão é igual ao um novo PDO
                //*temos que selecionar qual o banco que vamos utilziar
                //meu atributo de coneção recebe um novo atributo de PDO para podermos conectar a um banco de dados
                $this->connection = new PDO("mysql:host=$this->_host;dbname=$this->_dbName;", $this->_userName, $this->_dbPassaword);

                //o this apontador acessa o atributo de conexão PDO, e o conn acessa metodos da classe PDO
                //o set atribute seta atributos, sendo eles o modo de erro do PDO e o erro de modo de exeções
                //o primeiro paremetro é o que ele faz, o segundo é oq ele vai se tranformar
                $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            }
            //pegue o resutado
            //*não precisamos colocar o igual pois ja estamos atribuindo o tipo dela, ou seja, como se fosse um INT $erro, como no java
            catch(PDOException $erro){
                //getmessage = metodo do PDO exeption
                echo "Connection error: " . $erro->getMessage();
            }

        }

        public function returnConnection(){
            return $this->connection;
        }
    }

?>