<!DOCTYPE html>
<title>Midnight Moonlight: Title </title>
<html>
<head>
    <link rel="stylesheet" href="midnight.css?v=<?php echo rand(); ?>">
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script defer src="midnight.js"></script>
</head>
    <body> 
        <svg id="Title" viewBox="0 0 1000 500">
            <defs >
                <linearGradient id="darker" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stop-color="dimgray" />
                  <stop offset="100%" stop-color="white" />
                </linearGradient>
                <linearGradient id="lighter" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stop-color="white" />
                    <stop offset="100%" stop-color="dimgray" />
                </linearGradient>
                <linearGradient id="ray" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="white" />
                    <stop offset="99%" stop-color="black" />
                </linearGradient>

              </defs>
           
            <!--Rays ( Heavy work in progress, make moonrays go across screen and invert text color )-->
            <g>
                <rect class="rays" id="rayA" x="980" y="-200" width="90" height="1100"></rect>
                <rect class="rays" id="rayB" x="800" y="-200" width="33" height="1100"></rect>
                <rect class="rays" id="rayC" x="650" y="-200" width="75" height="1100"></rect>
                <rect class="rays" id="rayD" x="450" y="-200" width="75" height="1100"></rect>
            </g>
            
            <!--Currently Start Button, Rework to work with current title screen-->
             <polygon id="moon" visibility="hidden" points="150,15 258,77 258,202 150,265 42,202 42,77" /> 

            <!--Title Stuff-->
            <text x="280" y="170" fill="url(#darker)" font-size="100">Midnight</text>
            <text x="250" y="270" fill="url(#lighter)" font-size="100" >Moonlight</text>
            
            <!--Buttons--> 
            <g id="buttons" onclick="ButtonPress()">
                <a href="hotel.php">
                <text class="MenuText" x="100" y="375" font-size="75" >Start</text>
                <rect id="startBox" x="50" y="300" width="250" height="100" stroke="white" stroke-width="3" rx="5" ry="5"></rect>
                </a>

                <text class="MenuText" x="390" y="375" font-size="75" >Load</text>
                <rect onclick="ButtonPress()" id="loadBox" x="350" y="300" width="250" height="100" fill="black" stroke="white" stroke-width="3" rx="5" ry="5"></rect>
                
                <a href="options.php">
                <text class="MenuText" x="675" y="375" font-size="75" >Options</text>
                <rect id="optionsBox" x="650" y="300" width="290" height="100" fill="black" stroke="white" stroke-width="3" rx="5" ry="5"></rect>      
                </a>
            </g>
        </svg>
    </body>
</html>