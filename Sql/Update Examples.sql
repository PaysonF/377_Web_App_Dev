-- Find Kristian Saunders
SELECT *
FROM students
WHERE stu_first_name = 'Kristian'
  AND stu_last_name = 'Saunders'
;
-- Update Kristian Saunder's address ( UNSAFE )
UPDATE students
   SET stu_address = '287 Cedar Street', stu_city = 'Hanover', stu_zip_code = '02339'
 WHERE stu_first_name = 'Kristian'
   AND stu_last_name = 'Saunders'
;
-- Update Kristian Saunder's address ( SAFE )
UPDATE students
   SET stu_address = '287 Cedar Street', stu_city = 'Hanover', stu_zip_code = '02339'
 WHERE stu_id = 'STD000000173cr'
;
-- Example of updating ALL records in a table ( not often what we want to do )
SELECT *
  FROM schools
;
-- DANGEROUS SCRIPT
-- UPDATE schools
   SET skl_level = 'All Levels'
;
SELECT *
  FROM students
WHERE stu_status = 'Active'
  AND stu_grade_level = '12'
;
UPDATE students
   SET stu_yog = 2024
 WHERE stu_status = 'Active'
  AND stu_grade_level = '12'
;
UPDATE students
   SET stu_yog = stu_yog + 5
 WHERE stu_status = 'Active'
   AND stu_grade_level <> '12'
;
SELECT *
  FROM students
WHERE UPPER(stu_middle_name) = 'NMN'
;
UPDATE students
SET stu_middle_name = ''
WHERE UPPER(stu_middle_name) = 'NMN'
;