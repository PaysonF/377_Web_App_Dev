document.onkeydown = checkey;
let px = 345;
let py = 125;
let move = 0; 
let xmove = move;
let ymove= move;
// All variables below use x,y list for various things, interactList dictates areas where the player should be able to use stuff, movelimit list prevents the player from moving when they are at the edge of a room, lastly transport list is where the "doors are" mabye make into part of the interact list but seperate
let interactList = [50, "Placeholder"];
let movelimitList = [];
let transportList = ["Plhold"];

// doorways should always be fifty wide! ex. (100,0 - 150,0)
let room = "starter";
let hallway = [[50,175], [150,175], [150,150], [200,150], [200,175], [550,175], [950,175], [950,215], [975,215], [975,260], [950,260], [950,300], [50,300]];
let starter = [[300,100], [300,200], [200,200], [200,300], [300,300], [600,300], [600,100]];
let elevator = [[300,150], [400,150], [400,100], [475,100], [475,150], [525,150], [525,100], [600,100], [600,150], [700,150], [700,400], [300,400]];
let cafe = [[50,400], [950,400], [950,100], [50,100]];
let tube = [[400,25], [600,25], [600,475], [400,475]];

$(document).ready(function() {
    $("#player").fadeIn(100);
    document.getElementById("Rooms").setAttribute("points", starter);
    characterChange("Vertical");
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
        
    if (e.key == "ArrowRight" || e.key == "d" || e.key == "ArrowLeft" || e.key == "a"){
            //Facing Horizontaly
            characterChange("Horizontal");
            if (e.key == "ArrowRight" || e.key == "d"){ //Right
                xmove += 10;
            } else if(e.key == "ArrowLeft" || e.key == "a"){ //Left
                xmove -= 10;
            }
    } else if (e.key == "ArrowUp" || e.key == "w" || e.key == "ArrowDown" || e.key == "s"){
            //Facing Verticaly
            characterChange("Vertical");
            if(e.key == "ArrowUp" || e.key == "w"){ //Left
                ymove -= 10
            } else if(e.key == "ArrowDown" || e.key == "s"){ //Left
                ymove += 10
            }
    }   
    else if(e.key == ' '){ //Interact
        console.log("xmove: " + xmove + ",and ymove? " + ymove);
        interact(px, py);
        if (room == "hallway"){
            roomChange(starter); 
        } else {
            roomChange(hallway);
        }
    }
    limit_move(px, py);
    //document.getElementById("Rooms").setAttribute("transform", "translate(" + px + "," + py + ")");
    //Code which makes the player actually move
    // \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
    $("#player").attr("transform", "translate(" + xmove + "," + ymove + ")");

    //
    // initialy put player group at 0,0 then copy above command and use it at the start, after that
    // start to do some initial fade outs and fade ins reloading or coming from the title screen
    //
    // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
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