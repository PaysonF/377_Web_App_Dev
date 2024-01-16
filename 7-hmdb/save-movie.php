<?php

include("library.php");

$connection = getDatabaseConnection();

extract($_REQUEST);

$sql = "INSERT INTO movies (mov_title, mov_year, mov_genre) VALUES ('$title', $year, '$genre')";

$connection->query($sql);

echo "Created a movie!";
echo "<br/>";
echo "<a href='new-movie.php'>Create another</a>";