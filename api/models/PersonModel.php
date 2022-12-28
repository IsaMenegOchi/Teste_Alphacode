<?php

    class PersonModel{
        private $connection;
        private $idPerson;
        private $fullName;
        private $dateOfBirth;
        private $occupation;
        private $email;
        private $contactPhone;
        private $contactCellPhone;
        private $cellPhoneNumberWhatsApp;
        private $sendSMSNotification;
        private $sendEmailNotification;

        public function __construct($constConnection){

             // permite reveber dados json atraves da requisição
            $json = file_get_contents("php://input"); //todos os inputs guardamos nessa variavel
            $personData = json_decode($json);

             //
            $this->idPerson = $personData->idPerson ?? $_GET["idPerson"] ?? $_PUT["idPerson"] ?? null;

            //*dados por meio de jason
            $this->fullName = $personData->fullName ?? null;
            $this->dateOfBirth = $personData->dateOfBirth ?? null;
            $this->occupation = $personData->occupation ?? null;
            $this->email = $personData->email ?? null;
            $this->contactPhone = $personData->contactPhone ?? null;
            $this->contactCellPhone = $personData->contactCellPhone ?? null;
            $this->cellPhoneNumberWhatsApp = $personData->cellPhoneNumberWhatsApp ?? null;
            $this->sendSMSNotification = $personData->sendSMSNotification ?? null;
            $this->sendEmailNotification = $personData->sendEmailNotification ?? null;

            $this->connection = $constConnection;

        }//Construct end

        public function findAll(){
            //instruçã SQL
            $sql = "SELECT * FROM tbl_person";

            //prepara um processo de execução de instrução SQL
            //representa uma statment
            $statement = $this->connection->prepare($sql);
            //faz com que execute o que pedirmos
            $statement->execute();
            //devolve os valores da select para serem utilizados
            //FETCH ASSOC - faz com que o array seja apeas associativo e não numerico na hora e exibir os dados
            return $statement->fetchAll(\PDO::FETCH_ASSOC);
        
        }//Find all end

        public function findById(){
            //colocamos uma interrogação pois não devemos colocar a variavel direto, e sim trata-la posteriormente
            $sql = "SELECT * FROM tbl_person WHERE idPerson = ?";

            $statement = $this->connection->prepare($sql);

            $statement->bindValue(1, $this->idPerson);

            $statement->execute();

            return $statement->fetchAll(\PDO::FETCH_ASSOC);

        }//Find by id end

        public function create() {

            $sql = "INSERT INTO tbl_person (fullName, dateOfBirth, occupation, email, contactPhone, contactCellPhone, cellPhoneNumberWhatsApp, sendSMSNotification, sendEmailNotification) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

            $statement = $this->connection->prepare($sql);
            
            $statement->bindValue(1, $this->fullName);
            $statement->bindValue(2, $this->dateOfBirth);
            $statement->bindValue(3, $this->occupation);
            $statement->bindValue(4, $this->email);
            $statement->bindValue(5, $this->contactPhone);
            $statement->bindValue(6, $this->contactCellPhone);
            $statement->bindValue(7, $this->cellPhoneNumberWhatsApp);
            $statement->bindValue(8, $this->sendSMSNotification);
            $statement->bindValue(9, $this->sendEmailNotification);


            if ($statement->execute()) {
                return "|Success|";
            }
            else{
                return "|Failed|";
            }

        }//create end

        public function update(){

            $sql = "UPDATE tbl_person SET
            fullName = ?, 
            dateOfBirth = ?, 
            occupation = ?, 
            email = ?, 
            contactPhone = ?, 
            contactCellPhone = ?, 
            cellPhoneNumberWhatsApp = ?, 
            sendSMSNotification = ?, 
            sendEmailNotification = ?
            WHERE idPerson = ?";

            $statement = $this->connection->prepare($sql);

            $statement->bindValue(1, $this->fullName);
            $statement->bindValue(2, $this->dateOfBirth);
            $statement->bindValue(3, $this->occupation);
            $statement->bindValue(4, $this->email);
            $statement->bindValue(5, $this->contactPhone);
            $statement->bindValue(6, $this->contactCellPhone);
            $statement->bindValue(7, $this->cellPhoneNumberWhatsApp);
            $statement->bindValue(8, $this->sendSMSNotification);
            $statement->bindValue(9, $this->sendEmailNotification);

            $statement->bindValue(10, $this->idPerson);

            if ($statement->execute()) {
                return "Successfully changed data!";
            }

        }//update end

        public function delete(){

            $sql = "DELETE FROM tbl_person WHERE idPerson = ?";

            $statement = $this->connection->prepare($sql);

            $statement->bindValue(1, $this->idPerson);

            if ($statement->execute()) {
                return "Data deleted successfully";
            }//condiction end
        }//delete end
    
    }//class end

?>