CREATE SCHEMA `midnight_moonlight` ;

CREATE TABLE `midnight_moonlight`.`saves` (
  `idsaves` INT NOT NULL,
  `location` VARCHAR(20) NULL,
  `room` VARCHAR(20) NULL,
  `playername` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`idsaves`));