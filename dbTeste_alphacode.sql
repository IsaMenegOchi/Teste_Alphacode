-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: teste_alphacode
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_person`
--

DROP TABLE IF EXISTS `tbl_person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbl_person` (
  `idPerson` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(200) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `occupation` varchar(200) NOT NULL,
  `email` varchar(250) NOT NULL,
  `contactPhone` varchar(50) DEFAULT NULL,
  `contactCellPhone` varchar(50) NOT NULL,
  `cellPhoneNumberWhatsApp` tinyint(4) NOT NULL,
  `sendSMSNotification` tinyint(4) NOT NULL,
  `sendEmailNotification` tinyint(4) NOT NULL,
  PRIMARY KEY (`idPerson`),
  UNIQUE KEY `idPessoa_UNIQUE` (`idPerson`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_person`
--

LOCK TABLES `tbl_person` WRITE;
/*!40000 ALTER TABLE `tbl_person` DISABLE KEYS */;
INSERT INTO `tbl_person` VALUES (10,'José Silva','2005-05-05','Caminhoneiro','jose@gmail.com','(11) 4196-4632','(11) 95624-5210',1,0,1),(14,'Jose Ribeiro','2001-04-03','Teacher','rose.ribeiro@gmail.com','11 987654321','11 912347678',1,0,0),(16,'Nicole da Silva','2000-07-09','Psicologa','nicole.silva@gmail.com','12345678','(11) 987654321',0,0,1),(20,'Fernanda Teixeira','1994-02-11','Tester','fernanda.teixeira@gmail.com','17643242','(20) 973643412',0,0,1),(21,'Roberto Pacheco','2004-05-12','Gamer','roberto.pacheco@gmail.com','826431321','(73) 9737231354',1,1,1),(22,'Gabriel Nascimento','2005-10-20','Freelancer','gabriel.nascimento@gmail.com','11 87654321','11 912345678',1,0,1),(23,'Yara Selvage','1983-10-02','Caçadora','yara.silvestre@gmail.com','934782344','(34) 97483791',1,0,1),(24,'Cleonice Santos','1970-05-03','Cozinheira','cleonice.santos@gmail.com','836483112','(11) 911111111',1,1,1),(26,'Maiara Araújo','2003-05-12','Analista financeiro','maiara.araujo@gmail.com','736431234','(11) 9943254545',0,0,1);
/*!40000 ALTER TABLE `tbl_person` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-28 15:44:57
