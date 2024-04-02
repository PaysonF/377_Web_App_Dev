document.onkeydown = checkey;
var px = 0;
var py = 0;      //document.getElementById("player").getAttribute('cy'); figure out whats wrong with this  
var movespeed = 5;
// All variables below use x,y list for various things, interactList dictates areas where the player should be able to use stuff, movelimit list prevents the player from moving when they are at the edge of a room, lastly transport list is where the "doors are" mabye make into part of the interact list but seperate
var interactList = [50, "Placeholder"];
var movelimitList = [];
var transportList = ["Plhold"];

$(document).ready(function() {
    $("#player").fadeIn(100);
});

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
            console.log("Space Pressed");    
            interact(px, py);
        }
        limit_move(px, py);
        console.log("player x: " + $("#player").attr("cx"));
        // $("#player").attr("x", px); 
        $("#player").attr("transform", "translate(" + px + "," + py + ")");
        console.log(px);
        // $(".player").attr('cy', py);
        //} 
}
//handle all three
function limit_move(x, y){
    var temp = x.toString() + y.toString();
    console.log("temp is: " + temp)
    if (temp in interactList || temp in movelimitList){
        console.log("Dont Move")
    }
}

function interact(x, y){
    console.log(checklist);
    if ("hello" in checklist){
        log("CheckList: Hello")
    }
}   