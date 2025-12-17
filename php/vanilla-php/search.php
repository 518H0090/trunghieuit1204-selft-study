<?php  

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userSearch = htmlspecialchars($_POST["usersearch"]);

    try {
        require_once "includes/dbh.inc.php";

        $query = "SELECT * FROM comments WHERE username = ?;";

        $stmt = $pdo->prepare($query);

        $stmt->execute([$userSearch]);  

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $pdo = null;
        $stmt = null;

    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
}
else {
    header("Location: ../index.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <section>

    <h3>Search results:</h3>

    <?php 

        if(empty($results)) {
            echo "<div>";

            echo $userSearch;

            echo "<p>There were no results</p>";

            echo "</div>";
        }
        else {
            foreach($results as $row) {
                echo "<div>";
                echo "<h4>" . htmlspecialchars($row["username"]) . "</h4>";
                echo "<h4>" . htmlspecialchars($row["comment_text"]) . "</h4>";
                echo "<h4>" . htmlspecialchars($row["created_at"]) . "</h4>";
                echo "</div>";
            }
        }

    ?>

    </section>
</body>
</html>