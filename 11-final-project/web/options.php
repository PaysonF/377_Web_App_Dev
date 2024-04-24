<!DOCTYPE html>
<title>Midnight Moonlight: Options </title>
<html>
<head>
    <link rel="stylesheet" href="midnight.css?v=<?php echo rand(); ?>">
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script defer src="midnight.js"></script>
</head>
    <body> 
        <svg id="NULL" viewBox="0 0 1000 500">
            <rect x="50" y="50" width="900" height="400" stroke="white" stroke-width="5"></rect>
            <!-- Dividing Lines-->
            <line x1="333" x2="333" y1="50" y2="450" stroke-width="5"></line>
            <line x1="666" x2="666" y1="50" y2="450" stroke-width="5"></line>
            <line x1="50" x2="950" y1="100" y2="100" stroke-width="5"></line>

            <!-- Back Button -->
            <a href="title.php">
                <rect x="350" y="400" width="300" height="50" stroke="white" stroke-width="5"></rect>
                <text class="settingtoptext" x="390" y="440" fill="white" >Title Screen</text>
            </a>
            <!-- Top Text -->
            <text class="settingtoptext" x="130" y="90" >Sound</text>        
        </svg>
    </body>
</html>