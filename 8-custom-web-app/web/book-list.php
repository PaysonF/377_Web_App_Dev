<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Title</th>
            <th style="color:red">Author</th>
            <th style="color:green">Genre</th>
            <th style="color:grey">Page Length</th>
            <th style="color:gold">GoodReads Rating</th>
            <th>Release</th>
            <th>Series</th>
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
    echo '<td style="color:red">' . $row['bok_author'] . '</td>';
    echo '<td style="color:green">' . $row['bok_genre'] . '</td>';
    echo '<td style="color:grey">' . $row['bok_length'] . ' pages' . '</td>';
    echo '<td style="color:gold;font-weight:bold">' . $row['bok_rating'] . ' / 5' . '</td>';
    echo '<td>' . $row['bok_release'] . '</td>';
    echo '<td>' . $row['bok_series'] . '</td>';
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