<?php

include('library.php');

$connection = get_database_connection();

$sql = '';

if (isset($id) && $id != '')
{
    $sql =<<<SQL
    UPDATE books
       SET book_title = '$title',
           bok_author = '$author',
           bok_genre = '$genre',
           bok_length = '$length',
     WHERE bok_id = $id
    SQL;
}
else
{
    $sql =<<<SQL
    INSERT INTO books (bok_title, bok_author, bok_genre, bok_length)
    VALUES ('$title', '$author', '$genre', '$length')
    SQL;
}

$connection->query($sql);

header('Location: index.php');