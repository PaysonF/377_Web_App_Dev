<?php

function getDatabaseConnection()
{
    $servername = "localhost";
    $username = "root";
    $password = "password";
    $dbname = "hmdb";

    $connection = new mysqli($servername, $username, $password, $dbname);
    if ($connection->connect_error)
    {
        die("Connection failed: " . $connection->connect_error);
    }

    return $connection;
}