-- CREATE statements

CREATE TABLE `sis`.`awards` (
  awa_id INT             NOT NULL AUTO_INCREMENT,
  awa_stu_id VARCHAR(14) NOT NULL,
  awa_date DATETIME      NULL,
  awa_name VARCHAR(100)  NULL,
  PRIMARY KEY (`awa_id`));
  
-- stdX2000003405
  SELECT *
  FROM students
WHERE stu_first_name = 'John'
AND stu_last_name = 'Whelan'
;
INSERT INTO awards (awa_stu_id, awa_date, awa_name)
VALUES ('stdX2000003405', '2023-09-20', 'Spelling Bee')
;
SELECT *
FROM awards
;
-- Can't exucute statement, id num is in use
INSERT INTO awards (awa_id, awa_stu_id)
VALUES (1, 'stdX2000003405')
;
-- Create Fee Table
DROP TABLE IF EXISTS fees;
CREATE TABLE `sis`.`fees` (
  fee_id     INT           NOT NULL AUTO_INCREMENT,
  fee_owed   DECIMAL(6, 2) NULL,
  fee_paid   DECIMAL(6, 2) NULL,
  fee_stu_id INT           NULL,
  fee_date   DATETIME      NULL,
  fee_name   VARCHAR(45)   NULL,
  PRIMARY KEY (`fee_id`));
;
SELECT *
FROM fees
;
-- John Goes on a field trip to the museum of science for 30
-- and he broke his chromebook, repair is 75.40
-- he has only paid for chromebook 