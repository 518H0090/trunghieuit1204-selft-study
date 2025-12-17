<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = htmlspecialchars($_POST["firstname"]);
    $lastname = htmlspecialchars($_POST["lastname"]);
    $pets = htmlspecialchars($_POST["favouritepet"]);

    if (empty($firstname)) {
        exit();
        header("Location: ../index.php");
    }

    echo "These are the data, that the user submitted: ";
    echo "<br />";
    echo $firstname;
    echo "<br />";
    echo $lastname;
    echo "<br />";
    echo $pets;
}