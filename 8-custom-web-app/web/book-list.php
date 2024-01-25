<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Page Length</th>
            <th>GoodReads Rating</th>
            <th>Release</th>
        </tr>
    </thead>

    <tbody>
<?php

$connection = get_database_connection();

$sql =<<<SQL
SELECT *
  FROM books
 ORDER BY bok_title
SQL;

$result = $connection->query($sql);
while ($row = $result->fetch_assoc())
{
    echo '<tr>';
    echo '<td>';
    echo '<a href="index.php?content=book-detail&id=' . $row['bok_id'] . '">' . $row['bok_title'] . '</a>';
    echo '</td>';
    echo '<td>' . $row['bok_author'] . '</td>';
    echo '<td>' . $row['bok_genre'] . '</td>';
    echo '<td>' . $row['bok_length'] . '</td>';
    echo '<td>' . $row['bok_rating'] . ' / 5' . '</td>';
    echo '<td>' . $row['bok_release'] . '</td>';
    /* format for link,
    if ($row['mov_imdb_id'] != '')
    {
        echo '<a href="https://www.imdb.com/title/' . $row['mov_imdb_id'] . '" target="_blank" title="View on iMDB"><i class="bi bi-film"></i></a>';
    }
    echo '</td>';
    echo '<td>' . $row['bok_series'] . '</td>';
    */
    echo '</tr>';
}

?>
    </tbody>
</table>

<a href="index.php?content=book-detail" class="btn btn-primary" role="button" aria-disabled="true">Add a Book</a>
<!-- Here there will be sort-->
<a href="index.php?content=book-sort" class="btn btn-success role="button" aria-disabled="true">Sort By</a>