// Current move method called when key is pressed
if ( window.location.href != "http://localhost/377wad/11-final-project/web/title.php"){
    document.onkeydown = checkey; 
}

// Moving Help coords ( Player & enemy )

let px = 340;
let py = 150;
let ex = 500;
let ey = 210;

// doorways should always be about fifty wide! ex. (100,0 - 150,0)
//Room variable used to help with roomChange
var room = "starter";

//Arrays of points that are used by the function roomChange to change the polygon with the id of "Rooms"

// Hotel Rooms
let starter = [[300,100], [300,200], [200,200], [200,300], [300,300], [600,300], [600,100]];
let hallway = [[50,175], [150,175], [150,150], [200,150], [200,175], [550,175], [950,175], [950,215], [975,215], [975,260], [950,260], [950,300], [50,300]];
let elevator = [[300,150], [400,150], [400,100], [475,100], [475,150], [525,150], [525,100], [600,100], [600,150], [700,150], [700,400], [300,400]];
let cafe = [[50,400], [950,400], [950,100], [50,100]];
let tube = [[400,25], [600,25], [600,475], [400,475]];
//Alleyways Rooms
let outside = [[200,100], [200,300], [300,300], [600,300], [600,100]];
//Streets Rooms
let startofend = [[200,100], [200,300], [300,300], [600,300], [600,100]];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Called on Save Button Press, causes save menu to appear
function SavesNavigation(str){
    if(str == "To"){
        $("#buttons").fadeOut(300);
        $("#SavesBox").attr("visibility", "visible");

    } else {
        $("#buttons").fadeIn(300);
        $("#SavesBox").attr("visibility", "hidden");
    }
    
}

//Function which changes arms and legs positions acccording to the faced direction
function characterChange(current){
    var armdis = 0, legdis = 0;
    if (current == "Vertical"){
        armdis = 10, legdis = 5;
    }
    $("#Backarm").attr("transform", "translate(" + armdis + "," + 0 + ")");
    $("#Frontarm").attr("transform", "translate(" + -armdis + "," + 0 + ")");
    $("#Backleg").attr("transform", "translate(" + legdis + "," + 0 + ")");
    $("#Frontleg").attr("transform", "translate(" + -legdis + "," + 0 + ")");
}

//Function called on key down, handles movement
function checkey(e){
    e.preventDefault();
    //if (player x not in border && player y not in border){ make this check if player is not aganist wall, and not in cutscene or anything else
    
    if (e.key == "ArrowRight" || e.key == "d" || e.key == "ArrowLeft" || e.key == "a"){
            //Facing Horizontaly
            characterChange("Horizontal");
            if (e.key == "ArrowRight" || e.key == "d"){ //Right
                // if (pxand ymove) statements are basic limiters / need to be made better
                // current method only works with either squares or rectangles without any indents
                if (px <= 500){
                    px+= 10; 
                }
            } else if(e.key == "ArrowLeft" || e.key == "a"){ //Left
                if (px >= -135){
                    px-= 10;
                }
            }
    }   else if (e.key == "ArrowUp" || e.key == "w" || e.key == "ArrowDown" || e.key == "s"){
            //Facing Verticaly
            characterChange("Vertical");
            if(e.key == "ArrowUp" || e.key == "w"){ //Left
                if (py >= -50){
                    py-= 10
                }
            } else if(e.key == "ArrowDown" || e.key == "s"){ //Left
                if (py <= 500){
                    py+= 10 
                }
            }
            //Save Checkpoint
    } else if (e.key == "x"){
        window.location.href = "http://localhost/377wad/11-final-project/web/save.php";
    }
    //movehelp Calls
    movehelp("Head");
    movehelp("Body")
    movehelp("Backarm")
    movehelp("Frontarm")
    movehelp("Backleg")
    movehelp("Frontleg")
    //Changes room to hallway when in spot]
    if (py < 250 && py > 200 && room != "hallway" && px < 200 && px > 100){
        const myTimeout = setTimeout(enemy_ready, 2500);
        document.getElementById('hitbox').setAttribute('visibility', 'hidden');
        roomChange(hallway);
        room = "hallway"
    } else if (py < 180 && py > 150 && room == "hallway" && px < 190 && px > 150){
        document.getElementById('evilBlob').setAttribute('visibility', 'hidden');
        document.getElementById('hitbox').setAttribute('visibility', 'hidden');
        roomChange(starter);
        room = "starter"
    }
        
}
//movement handeler
function movehelp(bp){
    if (bp == "Head"){
        document.getElementById(bp).setAttribute('cx', px + 5);
        document.getElementById(bp).setAttribute('cy', py - 25);
    } else if (bp.includes("arm") || bp == "Body") {
        document.getElementById(bp).setAttribute('x', px);
        document.getElementById(bp).setAttribute('y', py - 15);
    } else {
        document.getElementById(bp).setAttribute('x', px);
        document.getElementById(bp).setAttribute('y', py + 5);
    }
}
function enemy_ready(){
    document.getElementById("evilBlob").setAttribute('visibility', 'visible');
    ex = 500, ey = 210;
    document.getElementById("evilBlob").setAttribute('x', ex);
    document.getElementById("evilBlob").setAttribute('y', ey);
    setInterval(enemy_move, 500)
}
function enemy_move(){
    let tarx = px - 20;
    let tary = py - 30;
    if(ex < tarx){
        ex += 10;
    } else if (ex > tarx){
        ex -= 10;
    } 
    if(ey < tary){
        ey += 10;
    } else if (ey > tary){
        ey -= 10;
    }
    if( ex == tarx && ey == tary && room == "hallway"){
        window.location.href = "http://localhost/377wad/11-final-project/web/title.php";  
    }
    document.getElementById("evilBlob").setAttribute('x', ex);
    document.getElementById("evilBlob").setAttribute('y', ey);
}

function roomFade(time, type){
    //Lots of fade out statements
    if (type == "Out"){
        $("#Rooms").fadeOut(time);
        $("#player").fadeOut(time);
        //Change Objects Class to be specific to room name 
        $(".Objects" + room).fadeOut(time);
    } else if (type == "In"){
        $("#Rooms").fadeIn(time);
        $("#player").fadeIn(time);
        if (room == "starter"){
            $(".Objects" + room).fadeIn(1500);
        }
    }
}
function roomChange(destination){
    var delay = 1000;
    roomFade(delay, "Out");
    sleep(delay).then(() => { document.getElementById("Rooms").setAttribute("points", destination); });
    roomFade(1500, "In");
}