<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST["username"]);
    $pwd = htmlspecialchars($_POST["pwd"]);
    $email = htmlspecialchars($_POST["email"]);

    try {
        require_once "dbh.inc.php";

        // Insert Data 

        // $query = "INSERT INTO users(username, pwd, email) 
        // VALUES(?, ?, ?)";

        // $stmt = $pdo->prepare($query);

        // $stmt->execute([$username, $pwd, $email]);  

        $query = "INSERT INTO users(username, pwd, email) 
        VALUES(:username, :pwd, :email)";

        $stmt = $pdo->prepare($query);

        $pwdSignUp = "Krossing";

        $options = [
            'cost' => 12
        ];

        $hashedPwd = password_hash($pwd, PASSWORD_BCRYPT, $options);

        $stmt->bindParam(":username", $username, PDO::PARAM_STR);
        $stmt->bindParam(":pwd", $hashedPwd, PDO::PARAM_STR);
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