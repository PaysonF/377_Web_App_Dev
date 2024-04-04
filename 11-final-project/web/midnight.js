document.onkeydown = checkey;
var px = 0;
var py = 0;    //document.getElementById("player").getAttribute('cy'); figure out whats wrong with this  
var movespeed = 10;
// All variables below use x,y list for various things, interactList dictates areas where the player should be able to use stuff, movelimit list prevents the player from moving when they are at the edge of a room, lastly transport list is where the "doors are" mabye make into part of the interact list but seperate
var interactList = [50, "Placeholder"];
var movelimitList = [];
var transportList = ["Plhold"];

var minX = 0;
var maxX = 0;
var minY = -10;
var maxY = 50;

// doorways should always be fifty wide
var room = "starter";
var hallwaye = ["50,175", "150,175", "150,150", "200,150", "200,175", "550,175", "950,175", "950,215", "975,215", "975,260", "950,260", "950,300", "50,300"];
var starter = "300,100, 300,200, 200,200, 200,300, 300,300, 600,300, 600,100";
var elevator = "300,150, 400,150, 400,100, 475,100, 475,150, 525,150, 525,100, 600,100, 600,150, 700,150, 700,400, 300,400";
var cafe = "50,400 950,400 950,100 50,100";
var tube = "400,25 600,25 600,475 400,475";


var hallway = hallwaye.toString()
    .replace("[", "")  //remove the right bracket
    .replace("]", "")

$(document).ready(function() {
    $("#player").fadeIn(100);
    document.getElementById("Rooms").setAttribute("points", starter);
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function characterChange(current){
    if (current == "Horizontal"){
        $("#backArm").attr("transform", "translate(" + 0 + "," + 0 + ")");
        $("#frontArm").attr("transform", "translate(" + 0 + "," + 0 + ")");
        $("#backLeg").attr("transform", "translate(" + 0 + "," + 0 + ")");
        $("#frontLeg").attr("transform", "translate(" + 0 + "," + 0 + ")");
    } else if (current == "Vertical"){
        $("#backArm").attr("transform", "translate(" + 10 + "," + 0 + ")");
        $("#frontArm").attr("transform", "translate(" + -10 + "," + 0 + ")");
        $("#backLeg").attr("transform", "translate(" + 5 + "," + 0 + ")");
        $("#frontLeg").attr("transform", "translate(" + -5 + "," + 0 + ")");
    }
}

//$("#player").attr('cx')
function checkey(e){
    e.preventDefault();
    //if (player x not in border && player y not in border){ make this check if player is not aganist wall, and not in cutscene or anything else
        //Horizontal Movement
        
        //Make movement smoother eventually, get rid of stutter at begening
        // checks for what state character should be in
   
    console.log($("#f3Hallway").attr("points"));
    if (e.key == "ArrowRight" || e.key == "d" || e.key == "ArrowLeft" || e.key == "a"){
            //Facing Horizontaly
            characterChange("Horizontal");
    } else if (e.key == "ArrowUp" || e.key == "w" || e.key == "ArrowDown" || e.key == "s"){
            //Facing Verticaly
            characterChange("Vertical");
    }
        
    if (e.key == "ArrowRight" || e.key == "d"){ //Right
        px += movespeed;
    } else if(e.key == "ArrowLeft" || e.key == "a"){ //Left
        px -= movespeed;
    } else if(e.key == "ArrowUp" || e.key == "w"){ //Left
        py -= movespeed;
    } else if(e.key == "ArrowDown" || e.key == "s"){ //Left
        py += movespeed;
    } 
        
    else if(e.key == ' '){ //Interact
        console.log("room: " + room);
        interact(px, py);
        if (room == "hallway"){
            roomChange(starter); 
        } else {
            roomChange(hallway);
        }
    }
    limit_move(px, py);
    console.log("player y: " + py + ", MinY is:" + minY);
    //Spoused to make movement stutter (only moves in half sec intervals) does not work
    //Make rooms simple, 4 sides, 4 min/max variables - prevent movement if near 
    // make interaction / transportation points work though - check before preventing movement - and variable check

    if (py != minY || py != maxY){
        //document.getElementById("Rooms").setAttribute("transform", "translate(" + px + "," + py + ")");
        $("#player").attr("transform", "translate(" + px + "," + py + ")");
    }
    // $(".player").attr('cy', py);
    //} 
}
//handle all three
function limit_move(x, y){

}
  
function interact(x, y){
    console.log("Interaction")
} 

function roomFade(time, type){
    //Lots of fade out statements
    if (type == "Out"){
        $("#Rooms").fadeOut(time);
        $("#player").fadeOut(time);
    } else if (type == "In"){
        $("#Rooms").fadeIn(time);
        $("#player").fadeIn(time);
    }
}
function roomChange(destination){
    room = "hallway"
    var delay = 1000;
    roomFade(delay, "Out");
    sleep(delay).then(() => { document.getElementById("Rooms").setAttribute("points", destination); });
    roomFade(1500, "In");
}
