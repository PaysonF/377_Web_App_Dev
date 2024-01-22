<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>BookWebsite Link</th>
            <th>Rating</th>
            <th>Page Length</th>
        </tr>
    </thead>

    <tbody>
<?php

$connection = get_database_connection();

$sql =<<<SQL
SELECT *
  FROM books
 ORDER BY mov_title, mov_year, mov_rating
SQL;

$result = $connection->query($sql);
while ($row = $result->fetch_assoc())
{
    echo '<tr>';
    echo '<td>';
    echo '<a href="index.php?content=book-detail&id=' . $row['mov_id'] . '">' . $row['mov_title'] . '</a>';
    echo '</td>';
    echo '<td>' . $row['mov_year'] . '</td>';
    echo '<td>' . $row['mov_genre'] . '</td>';
    echo '<td>';
    if ($row['mov_imdb_id'] != '')
    {
        echo '<a href="https://www.imdb.com/title/' . $row['mov_imdb_id'] . '" target="_blank" title="View on iMDB"><i class="bi bi-film"></i></a>';
    }
    echo '</td>';
    echo '<td>' . $row['mov_rating'] . '</td>';
    echo '<td>' . $row['mov_duration'] . ' Minutes' . '</td>';
    echo '</tr>';
}

?>
    </tbody>
</table>

<a href="index.php?content=movie-detail" class="btn btn-primary" role="button" aria-disabled="true">Add a Movie</a>