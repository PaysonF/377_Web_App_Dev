<?php

include('library.php');

$connection = get_database_connection();

$sql = '';

if (isset($id) && $id != '')
{
    $sql =<<<SQL
    UPDATE books
       SET bok_title = '$title',
           bok_author = '$author',
           bok_genre = '$genre',
           bok_length = '$length',
           bok_rating = '$rating',
           bok_release = '$release',
           bok_series = '$series'
     WHERE bok_id = $id
    SQL;
}
elseif(book_title != '')
{
    $sql =<<<SQL
    INSERT INTO books (bok_title, bok_author, bok_genre, bok_length, bok_rating, bok_release, bok_series)
    VALUES ('$title', '$author', '$genre', '$length', '$rating', '$release', 'series')
    SQL;
}
else
{
    //Write code to do somethnig
}

$connection->query($sql);

header('Location: index.php');