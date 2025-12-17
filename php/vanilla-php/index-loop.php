<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        for ($i = 0; $i  < 10; $i += 2) {
            echo "<p>Index" . " " . $i . "</p>";
        }

        $boolean = true;

        static $increaseNum = 0;

        while($boolean) {

            $increaseNum++;

            if (rand(0, 30) == rand(0,30)) {
                $boolean = false;
                echo "<p>Last number : $increaseNum</p>";
            }
        }

        $test = 10;
        do {
            echo $test;
            $test++;
        } while ($test < 10);

        $fruits = array("Apple", "Banana", "Orange");

        foreach ($fruits as $fruit) {
            echo "<p>$fruit</p>";
        }

        $fruits = array("Apple" => "Red", "Banana" => "Yellow", "Orange" => "Orange");

        foreach($fruits as $fruit => $color) {
             echo "<p>$fruit has a color of $color</p>";
        }

    ?>
</body>
</html>