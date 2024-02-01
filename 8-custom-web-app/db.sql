CREATE DATABASE `tbdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `books` (
  `bok_id` int NOT NULL AUTO_INCREMENT,
  `bok_title` varchar(100) NOT NULL,
  `bok_author` varchar(50) NOT NULL,
  `bok_length` int DEFAULT NULL,
  `bok_rating` varchar(3) DEFAULT NULL,
  `bok_genre` varchar(25) DEFAULT NULL,
  `bok_release` date DEFAULT NULL,
  `bok_series` varchar(50) DEFAULT NULL,
  `bok_mov_chk` tinyint DEFAULT NULL,
  `bok_mov_dur` int DEFAULT NULL,
  `bok_sales` int DEFAULT NULL,
  PRIMARY KEY (`bok_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;