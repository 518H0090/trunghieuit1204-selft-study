<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST["username"]);
    $pwd = htmlspecialchars($_POST["pwd"]);
    $email = htmlspecialchars($_POST["email"]);

    try {
        require_once "dbh.inc.php";

        $query = 
        "UPDATE users
         SET username = :username, pwd = :pwd, email = :email
         WHERE id = 3;
        ";

        $stmt = $pdo->prepare($query);

        $stmt->bindParam(":username", $username, PDO::PARAM_STR);
        $stmt->bindParam(":pwd", $pwd, PDO::PARAM_STR);
        $stmt->bindParam(":email", $email, PDO::PARAM_STR);

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