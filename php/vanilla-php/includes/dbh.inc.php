<?php

// Connect to Database

$dsn = "mysql:host=localhost;dbname=myfirstdatabase;";
$dbusername = "root";
$dbpassword = "";

try 
{
    $pdo = new PDO($dsn, $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(Exception $e) {
    echo "Connection failed: ". $e->getMessage();
}
