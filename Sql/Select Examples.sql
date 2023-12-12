-- **********************************************
-- Lesson 4: Basic SELECT statements
-- **********************************************

SELECT *
  FROM students
;

SELECT stu_first_name, stu_last_name, stu_grade_level
  FROM students
;

SELECT stu_first_name, stu_last_name, stu_grade_level
  FROM students
 WHERE stu_grade_level = '12'
   AND stu_status = 'Active'
;

SELECT stu_first_name, stu_last_name, stu_grade_level
  FROM students
 WHERE stu_grade_level = '12'
   AND stu_status = 'Active'
 ORDER BY stu_last_name, stu_first_name
;

SELECT DISTINCT stu_grade_level
  FROM students
;

SELECT DISTINCT stu_grade_level
  FROM students
 ORDER BY stu_grade_level
;

SELECT count(*)
  FROM students
;

-- We can use both queries to get the number of records in the attendance table
-- but the second options is MUCH more efficient than the first option.

SELECT * FROM attendance;
SELECT COUNT(*) FROM attendance;

-- Use the DISTINCT keyword to find the unique list of values that are in the att_code field

SELECT DISTINCT att_code
  FROM attendance
 ORDER BY att_code
;
-- Find all the attendence records for Suzanne Grant ( she is an 11th grader)
SELECT att_date, att_code, att_time
FROM students
JOIN attendance ON att_stu_id = stu_id
WHERE stu_id = 'STD0000001RSsM'
ORDER BY att_date
;

-- find all active teachers in the math and english department
SELECT tch_first_name, tch_last_name, tch_department, tch_status
  FROM teachers
WHERE (tch_department = 'MA' OR tch_department)
-- WHERE tch_departmnet IN ('MA', 'ELA')
  AND tch_status = 'Active'
;

-- Show the schedules for each active teacher in either ther math or english departments
SELECT tch_first_name, tch_last_name, tch_department, cls_course, cls_section, cls_meeting_times, cls_room
  FROM teachers
  JOIN classes ON cls_tch_id = tch_id
WHERE (tch_department = 'MA' OR tch_department)
  AND tch_status = 'Active'
  AND cls_course <> 'DST'
  AND cls_meeting_times IS NOT NULL
ORDER BY tch_last_name, tch_first_name, cls_meeting_times
;

-- Find all active freshmen and show first name last name and number of absences
SELECT stu_first_name AS 'First Name', stu_last_name AS 'Last Name', COUNT(*) AS 'Absences'
  FROM students
  JOIN attendance ON att_stu_id = stu_id
  WHERE stu_status = 'Active' 
  AND stu_grade_level = '09'
  AND att_code = 'A'
  GROUP BY stu_first_name, stu_last_name
  ORDER BY 3 DESC, stu_first_name, stu_last_name
;

-- Find all active freshmen with perfect attendence
SELECT stu_first_name, stu_last_name, att_id, att_code
  FROM students
  LEFT JOIN attendance ON att_stu_id = stu_id AND att_code = 'A'
WHERE stu_grade_level = '09'
  AND stu_status = 'Active'
  AND att_id IS NULL
-- GROUP BY stu_first_name, stu_last_name
ORDER BY stu_first_name, stu_last_name
;