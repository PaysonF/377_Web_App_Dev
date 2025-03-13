<!DOCTYPE html>
<title>Saving Progress</title>
<html>
    <head>
        <link rel="stylesheet" href="midnight.css?v=<?php echo rand(); ?>">
    </head>
    <body>
        <h1 style="color:white;">Saving . . . . . <h1>
        <h1 style="color:white;">Saved!<h1>
        
    </body>
</html>


<?php
$location = '';
$room = '';
$playername = '';
$sql =<<<SQL
INSERT INTO midnight_moonlight (location, room, playername)
VALUES ('$location', '$room', '$playername')
SQL;
?>
