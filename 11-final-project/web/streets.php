<!DOCTYPE html>
<title>Midnight Moonlight: Streets</title>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="midnight.js?v=<?php echo rand(); ?>"></script>
    <script>
        $(document).ready(function() {
            $("#player").fadeOut(0);
            $("#player").fadeIn(1000);
            document.getElementById("Rooms").setAttribute("points", startofend);
            characterChange("Vertical");
}); 
    </script>
    <link rel="stylesheet" href="midnight.css?v=<?php echo rand(); ?>">
</head>
    <body>
        <svg id="Streets" viewBox="0 0 1000 500">
            <!-- Polygon - Representing all rooms -->
            <polygon id="Rooms"></polygon>

            <!-- Objects -->
                <polygon class="Objects" id="Lantern" points = "500,400 510,385 520,400 520,425 508,425 508,412 512,412 512,425 500,425" stroke="white" stroke-width="1.25"></polygon>
            <g id="player">
                <circle id ="Head" cx="345" cy="125" r="10" ></circle> <!--Head-->
                <rect id="Backarm" class="limb" width="10" height="20" x="340" y="132" rx="5" ry="5"></rect> <!--ArmBack-->
                <rect id="Body" width="10" height="25" x="340" y="135" rx="5" ry="5"></rect> <!--Body, All body parts should swing when walking-->
                <rect id="Backleg" class="limb" width="10" height="20" x="340" y="150" rx="5" ry="5"></rect> <!--LegBack-->
                <rect id="Frontleg" class="limb" width="10" height="20" x="340" y="150" rx="5" ry="5"></rect> <!--LegFront-->
                <rect id="Frontarm" width="10" height="20" x="340" y="132" rx="5" ry="5"></rect> <!--ArmFront-->
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