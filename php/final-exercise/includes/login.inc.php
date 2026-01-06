<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["pwd"];

    try {
        require_once "dbh.inc.php";
        require_once "login_model.inc.php";
        require_once "login_contr.inc.php";

        $errors = [];

        // ERROR HANDLERS
        if (is_input_empty($username, $pwd)) {
            $errors["empty_input"] = "Fil in all fields!";
        }

        $result = get_user($username, $pwd);

        if (is_username_wrong($result)) {
            $errors["login_incorrect"] = "Incorrect login info!";
        }

        if (!is_username_wrong($result) && is_password_wrong($pwd, $result["pwd"])) {
            $errors["login_incorrect"] = "Incorrect login info!";
        }

        require_once "config_session.inc.php";

        if ($errors) {
            $_SESSION["errors_signup"] = $errors;

            $signupData = [
                "username" => $username,
                "email" => $email,
            ];

            $_SESSION["signup_data"] = $signupData;

            header("Location: ../index.php");
            die();
        }

        $newSessionId = session_create_id();
        $sessionId = $newSessionId . "_" . $result["id"];
        session_id($sessionId);

        $_SESSION["user_id"] = $result["id"];
        $_SESSION["username"] = htmlspecialchars($result["username"]);
        $_SESSION["last_regeneration"] = time();

        header("Location: ../index.php?login=success");

        $pdo = null;
        $statement = null;

        die();
    } catch (PDOException $e) {
        die("Query failed: ") . $e->getMessage();
    }
} else {
    header("Location: ../index.php");
    die();
}
