<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        
        /**
         * Global scope
         * Local scope
         * Class scope
         * 
         */

        $test = "Hello World!";
        $globalTest = "Global Test";
        echo $test;

        function myFunction() {
            global $test;

            static $staticVar = 0;

            $staticVar++;

            $localVar = "Hello, Local Scope";

            return $localVar . " " . $test . " " . $GLOBALS["globalTest"] . " " . $staticVar;
        }

        echo myFunction();
        echo myFunction() . myFunction();

        class MYClass {

            public $classVar = "Hello, World!";
            static public $classVarStatic = "Hello, World!";

            public function myMethod() {
                echo $this->classVar;
            }
        }

        echo MYClass::$classVarStatic;

        $myClass = new MYClass();
        $myClass->myMethod();

    ?>
</body>
</html>