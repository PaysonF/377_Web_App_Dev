<?php

$title = '';
$author = '';
$genre = '';
$length = '';
$rating = '';
$release = '';
$series = '';

if (isset($id))
{
    $connection = get_database_connection();

    $sql =<<<SQL
    SELECT *
      FROM books
      WHERE bok_id = $id
    SQL;

    $result = $connection->query($sql);
    $row = $result->fetch_assoc();

    $title = $row['bok_title'];
    $author = $row['bok_author'];
    $genre = $row['bok_genre'];
    $length = $row['bok_length'];
    $rating = $row['bok_rating'];
    $release = $row['bok_release'];
    $series = $row['bok_series'];
}

?>
<form action="save-book.php">
    <div class="mb-3">
        <label for="sort" class="form-label">Sorting (Top to Bottom, First To last)</label>
        <select class="form-select" name="sort">
            <option <?php echo $genre == 'Title' ? 'selected' : '' ?>>Title</option>
            <option <?php echo $genre == 'Author' ? 'selected' : '' ?>>Author</option>
            <option <?php echo $genre == 'Genre' ? 'selected' : '' ?>>Genre</option>
            <option <?php echo $genre == 'Length' ? 'selected' : '' ?>>Length</option>
            <option <?php echo $genre == 'Rating' ? 'selected' : '' ?>>Rating</option>
            <option <?php echo $genre == 'Release' ? 'selected' : '' ?>>Release</option>
            <option <?php echo $genre == 'Series' ? 'selected' : '' ?>>Series</option>
        </select>
    </div>

    <button type="submit" class="btn btn-success">+</button>
    <br><br>
    <button type="submit" class="btn btn-primary">Sort</button>
    <a href="index.php?content=book-list" class="btn btn-secondary" role="button" aria-disabled="true">Cancel</a>
    <?php if (isset($id)) { ?>
    <button type="button" class="btn btn-danger" onclick="deleteBook()">Delete</button>
    <script>

    function deleteBook() {
        if (confirm('Are you sure you want to delete this book?')) {
            location.href = 'delete-book.php?id=<?php echo isset($id) ? $id : '' ?>';
        }
    }

    </script>
<?php } ?>
</form>