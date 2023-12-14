SELECT *
FROM students
WHERE stu_first_name = 'Kristian'
AND stu_last_name = 'Saunders'
;
DELETE FROM students
WHERE stu_id = 'STD000000173cr'
;

-- Check for orphans
SELECT COUNT(*) FROM attendance WHERE att_stu_id = 'STD000000173cr'; -- 11 attendence
SELECT COUNT(*) FROM schedules WHERE ssc_stu_id = 'STD000000173cr'; -- 25 records
SELECT COUNT(*) FROM transcripts WHERE trn_stu_id = 'STD000000173cr'; -- 0

-- Cleanup the orphans
DELETE FROM attendance WHERE att_stu_id = 'STD000000173cr'; -- 11 attendence
DELETE FROM schedules WHERE ssc_stu_id = 'STD000000173cr'; -- 25 records
DELETE FROM transcripts WHERE trn_stu_id = 'STD000000173cr'; -- 0
