<?php

$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "hmdb";

// Connect to the database and make sure it was sucessful
$connection = new mysqli($servername, $username, $password, $dbname);
if ($connection->connect_error)
{
    die('Connection failed' . $connection->connect_error);
}

extract($_REQUEST);

$sql = "INSERT INTO movies (mov_title, mov_year, mov_genre) VALUES ('$title', $year, '$genre') ";

echo $sql;

$connection->query($sql);

echo "Created a movie!";
echo "<a href ='new-move.php'>new movie created, create another one?</a>";