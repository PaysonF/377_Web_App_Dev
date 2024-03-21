document.onkeydown = checkey;
var px = 0;
var py = 0;      //document.getElementById("player").getAttribute('cy'); figure out whats wrong with this  
var movespeed = 5;
// All variables below use x,y list for various things, interactList dictates areas where the player should be able to use stuff, movelimit list prevents the player from moving when they are at the edge of a room, lastly transport list is where the "doors are" mabye make into part of the interact list but seperate
var interactList = ["hello", "Placeholder"];
var movelimitList = [];
var transportList = ["Plhold"];

$(document).ready(function() {
    //Code here runs upon page open
    //$("#f3Hallway").fadeOut(100);
    $("#starteroom").fadeOut(100);
});

function start(){
    $("#player").fadeIn(3100);
    //test rooms here
}

//$("#player").attr('cx')
function checkey(e){
    e.preventDefault();
    //if (player x not in border && player y not in border){ make this check if player is not aganist wall, and not in cutscene or anything else
        //Horizontal Movement
        
        //Make movement smoother eventually, get rid of stutter at begening
        if (e.key == "ArrowRight" || e.key == "d"){ //Right
            px += movespeed;
        } else if(e.key == "ArrowLeft" || e.key == "a"){ //Left
            px -= movespeed;
        } else if(e.key == "ArrowUp" || e.key == "w"){ //Left
            py -= movespeed;
        } else if(e.key == "ArrowDown" || e.key == "s"){ //Left
            py += movespeed;
        } else if(e.key == ' '){ //Interact
            start();
            console.log("Space Pressed");        
            interact(px, py);
        }
        console.log("player x: " + $("#player").attr("cx"));
        // $("#player").attr("x", px); 
        $("#player").attr("transform", "translate(" + px + "," + py + ")");
        console.log(px);
        // $(".player").attr('cy', py);
        //} 
}
function limit_move(){
    
}

function interact(x, y){
    console.log(checklist);
    if ("hello" in checklist){
        log("CheckList: Hello")
    }
}   