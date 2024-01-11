<DOCTYPE html>
<html>
    <head>
        <title>Sample School District</title>
    </head>

    <body>
        <h1>Welcome to Sample School District</h1>
        
        <h2>Student Enrollment</h2>

        <p> Filter by last name starting with
        <a href="student-list.php?last_name=All">All</a>
<?php
for ($i = 0; $i < 26; $i++)
{
    $letter = chr($i + ord("A"));
    echo "<a href='student-list.php?last_name=$letter'>$letter</a> ";
}          
                    

?>
        <br><br>
        Filter by first name contains
        <Form action="student-list.php">
            <input type="text" name="first_name" />
            <input type="submit" value="filter" />
        </p>
    
        <table border ='1'>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>YOG</th>
            </tr>
<?php

$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "sis";

// Connect to the database and make sure it was sucessful
$connection = new mysqli($servername, $username, $password, $dbname);
if ($connection->connect_error)
{
    die('Connection failed' . $connection->connect_error);
}

extract($_REQUEST);
//Magiacly we now have access to a $last_name variable and a $first_name variable
$clickstudent = "" . "%";
//if (isset($clickstudent)) 
//{
//    $sql = "SELECT * FROM students WHERE stu_first_name LIKE '$clickstudent'";
//} else
//{
    $sql = "SELECT stu_first_name, stu_last_name, stu_yog FROM students";
//}
if (isset($last_name))
{
    $sql .= " WHERE stu_last_name LIKE '$last_name%' ";
} elseif (isset($first_name))
{
    $sql .= " WHERE stu_first_name LIKE '$first_name%' ";
} 
$sql .= " ORDER BY stu_last_name, stu_first_name";

$result = $connection->query($sql);

while ($row = $result->fetch_assoc())
{
    echo "<tr a href='$clickstudent = stu_first_name'>";
    echo "<td>" . $row['stu_first_name'] . "</td>";
    echo "<td>" . $row['stu_last_name'] . "</td>";
    echo "<td>" . $row['stu_yog'] . "</td>";
    echo "</tr>";
}
// <Form action="student-list.php">
//<input type="text" name="first_name" />
//<input type="submit" value="filter" />
?>
        </table>
    </body>
</html>