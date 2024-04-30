<!DOCTYPE html>
<title>Midnight Moonlight: Hotel</title>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="midnight.js?v=<?php echo rand(); ?>"></script>
    <script>
        $(document).ready(function() {
            $("#player").fadeOut(0);
            $("#player").fadeIn(1000);
            document.getElementById("Rooms").setAttribute("points", starter);
            characterChange("Vertical");
}); 
    </script>
    <link rel="stylesheet" href="midnight.css?v=<?php echo rand(); ?>">
</head>
    <body>
        <svg id="Hotel" viewBox="0 0 1000 500">
            <!-- Polygon - Representing all rooms -->
            <polygon id="Rooms"></polygon>

            <!-- Objects -->
            <g class="Objects" id="Bed">
                <rect width="50" height="30" x="320" y="110" rx="5" ry="5"></rect>
                <rect width="50" height="75" x="320" y="130"></rect>
                <rect width="50" height="25" x="320" y="180"></rect>
                <rect width="20" height="1" x="335" y="190"></rect>
            </g>
                
            <g class="Objects">
                <rect id="lid"></rect>
                <rect id="glass"></rect>
                <rect id="candle"></rect>
                <rect id="bottom"></rect>
            </g>
            
                <polygon class="Objects" id="Lantern" points = "500,400 510,385 520,400 520,425 508,425 508,412 512,412 512,425 500,425" stroke="white" stroke-width="1.25"></polygon>
            <!--Character, try to link from a different file alongside srcs and organize it so everything is in right place-->
            <!--Left To Right State-->
            <!---->
            <rect id="hitbox" fill="yellow" width="50" height="50" x="200" y="200"></rect>
            
            <g id="player">
                <circle id ="head" cx="345" cy="125" r="10" ></circle> <!--Head-->
                <rect id="backArm" class="arm" width="10" height="20" x="340" y="132" rx="5" ry="5"></rect> <!--ArmBack-->
                <rect id="body" width="10" height="25" x="340" y="135" rx="5" ry="5"></rect> <!--Body, All body parts should swing when walking-->
                <rect id="backLeg" class="leg" width="10" height="20" x="340" y="150" rx="5" ry="5"></rect> <!--LegBack-->
                <rect id="frontLeg" class="leg" width="10" height="20" x="340" y="150" rx="5" ry="5"></rect> <!--LegFront-->
                <rect id="frontArm" class="arm"  width="10" height="20" x="340" y="132" rx="5" ry="5"></rect> <!--ArmFront-->
            </g>

            <g id="enemy">
                <rect id="evilBlob" width="50" height="50" x="100" y="100"></rect>
            </g>
            
            <!--Moonlight Spot, make varients later on!-->
            


                            <!--Button to Move into other rooms for testing stuff
            <g id="test" onclick="">
                <rect fill="blue" stroke="green"  stroke-width="5" width="100" height="100" x="850" y="10"></rect>
                <text x="868" y="73" fill="white" font-size="40">Test</text>
            </g>
-->
        </svg>
    </body>
</html>