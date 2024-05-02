<?php

$location = '';
$room = '';
$playername = '';

$sql =<<<SQL
INSERT INTO midnight_moonlight (location, room, playername)
VALUES ('$location', '$room', '$playername')
SQL;

?>
