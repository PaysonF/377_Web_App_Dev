<?php

include('library.php');

$connection = get_database_connection();

$sql = '';

if (isset($id) && $id != '')
{
    $sql =<<<SQL
    UPDATE movies
       SET mov_title = '$title',
           mov_year = $year,
           mov_genre = '$genre',
           mov_imdb_id = '$imdb_id',
           mov_rating = '$rating',
           mov_duration = '$duration'
     WHERE mov_id = $id
    SQL;
}
else
{
    $sql =<<<SQL
    INSERT INTO movies (mov_title, mov_year, mov_genre, mov_imdb_id, mov_rating, mov_duration)
    VALUES ('$title', $year, '$genre', '$imdb_id', '$rating', '$duration')
    SQL;
}

$connection->query($sql);

header('Location: index.php');