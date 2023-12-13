-- Practice with INSERT-ing data
-- INSERT INTO students (stu_id, stu_first_name, stu_middle_name, stu_last_name)
VALUES ('PSF', 'Payson', 'Spencer', 'Fowler' )
;
SELECT * 
  FROM students
;
-- Create Absence
INSERT INTO attendance (att_id, att_stu_id, att_date, att_code, att_time)
VALUES ( 'PSFAB', 'PSF', '2023-12-13 00:00:00', 'A', '' )
;
-- Check Absence
SELECT *
FROM attendance
WHERE att_stu_id = 'PSF'
;
-- Insert records in bulk
INSERT INTO attendance (att_id, att_stu_id, att_date, att_code)
VALUES ( 'PSFAB-1', 'PSF', '2023-12-13 00:00:00', 'FT' ), ( 'PSFAB-2', 'PSF', '2023-12-13 00:00:00', 'FT' ), ( 'PSFAB-3', 'PSF', '2023-12-13 00:00:00', 'FT' ), ( 'PSFAB-4', 'PSF', '2023-12-13 00:00:00', 'FT' ), ( 'PSFAB-5', 'PSF', '2023-12-13 00:00:00', 'FT' )
;
-- Insert records from a SELECT statement
INSERT INTO schools (skl_id, skl_name, skl_level)
SELECT SUBSTR(skl_id, 4, 14), CONCAT(skl_name, ' - Adult Education'), skl_level
FROM schools
WHERE skl_name like '%Magnet%'
;
SELECT *
FROM schools