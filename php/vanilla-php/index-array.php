<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $fruits = array("Apple", "Banana", "Cherry");
        $fruits_version2 = ["Apple", "Banana", "Cherry"];

        echo $fruits[0];

        $fruits[] = "Orange";

        echo $fruits[3];

        unset($fruits[1]);

        array_splice($fruits,0, 1);

        $tasks = [
            "laundry" => "Daniel",
            "trash" => "Frida",
            "vacuum" => "Basse",
            "dishes" => "Bella"
        ];

        echo $tasks["dishes"];

        print_r($tasks);

        echo count($tasks);

        sort($tasks);

        print_r($tasks);

         $fruits_version3 = ["Apple", "Banana", "Cherry"];
         array_push($fruits_version3, "Mango");
         print_r($fruits_version3);

         array_splice($fruits_version3,1, 0, "Melon");
         print_r($fruits_version3);

        $food = [
            array("apple", "mango"),
            ["banana", "cherry"]
        ];         

        echo $food[1][1];

        $food = [
            "fruits" => ["apple","banana","cherry"],
            "meat" => ["chicken","fish","meat"],
            "vegetables" => ["cucumber", "carrot"]
        ];

        echo $food["vegetables"][1];
    ?>
</body>
</html>