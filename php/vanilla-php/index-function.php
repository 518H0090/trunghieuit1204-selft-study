<?php
   declare(strict_types=1);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <?php 
        $string = "Hello world!";

        echo strlen($string);

        echo strpos($string, "wo");

        echo str_replace($string, "ll", "pp");

        echo strtolower($string);

        echo strtoupper($string);

        echo substr($string,2,2);

        print_r(explode(" ", $string));

        $number = -5.5;

        echo abs($number);

        echo sqrt(4);

        echo rand(20, 80);

        $array = ["apple", "banana", "orange"];

        echo count($array);

        echo is_array($array);

        echo array_push($array, "kiwi");

        print_r($array);

        print_r(array_reverse($array));

        $array2 = ["hello","world","work"];

        print_r(array_merge($array, $array2));  

        echo date("Y-m-d H:i:s");

        $date = "2023-04-12 12:00:00";

        echo strtotime($date);

        function sayHello() {
            echo "Hello World!";
        }

        function returnSayHello() {
            return "Hello World!";
        }

        function sayHelloSomeone($name) {
            return "Hello $name";
        }

        function helloWithDefault($firstname, $lastname = "Lo") {
            echo "<p>Hello $firstname</p>" . "<p>Break</>" . "<h3>$lastname</h3>";
        }
 
        sayHello();
        echo returnSayHello();
        echo sayHelloSomeone("Zhang");
        helloWithDefault("Chan");
        helloWithDefault("More", "Jack");

        $test = 25;
        function calculator(int $num01, int $num02) {
            global $test;
            return $num01 + $test + $num02;
        }

        echo calculator(2,3);
    ?>
</body>
</html>