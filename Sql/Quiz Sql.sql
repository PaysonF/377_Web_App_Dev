-- Q1: Write a skeleton SELECT statement with all 8 clauses
--     we have learned in this class (8 points)
-- A1: SELECT collums
-- FROM table
-- JOIN foreign table on primary table
-- WHERE condition
-- GROUP BY collum 
-- HAVING condition
-- ORDER BY collum
-- LIMIT number

-- Q2: What is Rose Blackburn's grade level? (1 points)
-- A2: Ninth Grade
SELECT stu_grade_level
FROM students
WHERE stu_first_name = 'Rose'
AND stu_last_name = 'Blackburn'
;
-- Q3: What were Taylor Keil's four term and final grades
--     in ALGEBRA 1? (2 points)
-- A3: Term 4 is B+ and Final is B
SELECT stu_first_name, stu_last_name, trn_term4_grade, trn_final
FROM students
JOIN transcripts ON transcripts.trn_stu_id = students.stu_id
WHERE stu_first_name = 'Taylor'
AND stu_last_name = 'Keil'
AND trn_course = 'ALGEBRA 1'
;
-- Q4: How many active students at Adams Elementary School
--     are in homeroom 21? (2 points)
-- A4: 19 students
SELECT COUNT(*)
FROM students
WHERE stu_status = 'Active'
AND stu_homeroom = '21'
;
-- Q5: How many active elementary school students were
--     absent in September 2023? (3 points)
-- A5: 1088 students were absent
SELECT DISTINCT COUNT(stu_id)
FROM schools
JOIN students ON students.stu_skl_id = schools.skl_id
JOIN attendance ON attendance.att_stu_id = students.stu_id
WHERE skl_level = 'Elementary'
AND stu_status = 'Active'
AND att_date LIKE '2022-09%'
;

-- Q6: How many section of History 6 does Sebastian
--     Matthews teach? (2 points)
-- A6: Four Different Sections
SELECT COUNT(DISTINCT cls_section)
FROM teachers
JOIN classes ON cls_tch_id = tch_id
WHERE tch_first_name = 'Sebastian' AND tch_last_name = 'Matthews' AND cls_course = 'History 6'
;
-- Q7: How many sections of History 6 are being taught
--     overall and what is the total enrollment across
--     all those sections? (3 points)
-- A7: Total 252 students spread across twelve different sections
SELECT COUNT(DISTINCT cls_id) AS 'Num Sections', COUNT(*) AS 'Total Students'
FROM classes
JOIN schedules ON ssc_cls_id = cls_id
JOIN students ON stu_id = ssc_stu_id
WHERE cls_course = 'History 6'
;
-- Q8: What is the first student, alphabetically by last
--     name, on the roster for History 6, section 11?
--     (5 points)
-- A8: Emilia Amis
SELECT *
FROM students
JOIN schedules on ssc_stu_id = stu_id
JOIN classes on cls_id = ssc_cls_id
WHERE cls_course = 'History 6' AND cls_section = '11'
ORDER BY stu_last_name
LIMIT 1
;
-- Q9: There was a new hire in the guidance department.
--     Write an UPDATE statement that will change students
--     who have counselor 'McDonnell, Kristen' to
--     'Rodriguez, Oscar' (2 points)
UPDATE students
SET stu_counselor = 'Rodriguez, Oscar'
WHERE stu_counselor = 'McDonnell, Kristen'
;
-- A9: Complete, Check Below
SELECT stu_first_name, stu_last_name, stu_counselor FROM students WHERE stu_counselor = 'Rodriguez, Oscar';
-- Q10: There was bad weather on the morning of Jan 26, 2022.
--      Write a DELETE statement that will remove all tardy
--      attendance records (code = 'T') on that date. (2 points)
-- A10: Done
DELETE FROM attendance
WHERE att_date = '2022-1-26 00:00:00' AND att_code = 'T'
;
-- Check
SELECT *
FROM attendance
WHERE att_date = '2022-1-26 00:00:00' AND att_code = 'T'
;