<!DOCTYPE html>
<html>
    <head>
        <title>PHP lesson 2</title>
    </head>

    <body>

        <?php

        //Keywords are NOT case-sensitive (variables and functions are)
        echo "<h1>Welcome to Php! </h1>";
        eChO "<br>";
        EcHo "It's a great language to know";
        ECHO "<br><br>";
        
//Making variable in php, has to start with $

    //String
        $name = "Payson";
        //with concatenation
        echo "Hello " . $name . "! ";
        echo "<br>";
        //with interpolation, only works on double quoted strings ("") not single quote strings ('')
        echo "Hello $name!";
        echo "<br>";
        echo 'Hello $name!';
        echo "<br><br>";

        //Math Examples
        $x = 5;
        $y = 3;

        echo "$x * $y = " . ($x * $y);

        //function example

        function square($number)
        {
            return $number * $number;
        }
        echo "<br><br>";
        echo "4 squared is " . square(4);

        ?>
    </body>
</html>