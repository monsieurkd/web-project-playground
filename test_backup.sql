-- MySQL dump 10.19  Distrib 10.3.39-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: db    Database: volunteer
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `volunteer`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `volunteer` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `volunteer`;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event` (
  `EventID` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `number` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'Youx Event - Graduation Ceremony','The event is dope','14/05/2024','Bar Smith Lawns',10);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-21  8:51:47


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(100),
  phonenumber VARCHAR(20),
  role ENUM('volunteer', 'manager')
);


INSERT INTO users (first_name, last_name, email, password, phonenumber, role) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123', '1234567890', 'volunteer'),
('Jane', 'Smith', 'jane.smith@example.com', 'password456', '9876543210', 'manager'),
('Alice', 'Johnson', 'alice.johnson@example.com', 'password789', '5551234567', 'volunteer');
