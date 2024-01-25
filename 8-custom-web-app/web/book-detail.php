<?php

$title = '';
$author = '';
$genre = '';
$length = '';
$rating = '';
$release = '';

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
    <input type="hidden" class="form-control" id="id" name="id" value="<?php echo isset($id) ? $id : '' ?>" />

    <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" name="title" value="<?php echo $title ?>" />
    </div>

    <div class="mb-3">
        <label for="author" class="form-label">Author</label>
        <input type="text" class="form-control" id="author" name="author" value="<?php echo $author ?>" />
    </div>

    <div class="mb-3">
        <label for="genre" class="form-label">Genre</label>
        <select class="form-select" name="genre">
            <option <?php echo $genre == 'Fantasy' ? 'selected' : '' ?>>Fantasy</option>
            <option <?php echo $genre == 'Comedy' ? 'selected' : '' ?>>Comedy</option>
            <option <?php echo $genre == 'Drama' ? 'selected' : '' ?>>Drama</option>
            <option <?php echo $genre == 'Family' ? 'selected' : '' ?>>Family</option>
            <option <?php echo $genre == 'Horror' ? 'selected' : '' ?>>Horror</option>
            <option <?php echo $genre == 'Sci-Fi' ? 'selected' : '' ?>>Sci-Fi</option>
            <option <?php echo $genre == 'Thriller' ? 'selected' : '' ?>>Thriller</option>
            <option <?php echo $genre == 'Documentry' ? 'selected' : '' ?>>Documentry</option>
        </select>
    </div>

    <div class="mb-3">
        <label for="length" class="form-label">Length</label>
        <input type="text" class="form-control" id="length" name="length" value="<?php echo $length ?>" />
    </div>

    <div class="mb-3">
        <label for="rating" class="form-label">Rating</label>
        <input type="text" class="form-control" id="rating" name="rating" value="<?php echo $rating ?>" />
    </div>

    <div class="mb-3">
        <label for="release" class="form-label">Release</label>
        <input type="date" class="form-control" id="release" name="release" value="<?php echo $release ?>" />
    </div>

    <button type="submit" class="btn btn-primary">Save</button>
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