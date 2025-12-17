<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST["username"]);
    $pwd = htmlspecialchars($_POST["pwd"]);

    try {
        require_once "dbh.inc.php";

        $query = "DELETE FROM users WHERE username = :username AND pwd = :pwd;";

        $stmt = $pdo->prepare($query);

        $stmt->bindParam(":username", $username, PDO::PARAM_STR);
        $stmt->bindParam(":pwd", $pwd, PDO::PARAM_STR);

        $stmt->execute();  

        $pdo = null;
        $stmt = null;

        header("Location: ../index.php");

        die();
    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
}
else {
    header("Location: ../index.php");
}