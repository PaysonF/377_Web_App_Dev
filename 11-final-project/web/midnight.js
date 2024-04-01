document.onkeydown = checkey;
var px = 0;
var py = 0;      //document.getElementById("player").getAttribute('cy'); figure out whats wrong with this  
var movespeed = 5;
// All variables below use x,y list for various things, interactList dictates areas where the player should be able to use stuff, movelimit list prevents the player from moving when they are at the edge of a room, lastly transport list is where the "doors are" mabye make into part of the interact list but seperate
var interactList = ["hello", "Placeholder"];
var movelimitList = [];
var transportList = ["Plhold"];

$(document).ready(function() {
    $("#player").fadeIn(100);
});

function start(){
    
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
function limit_move(a, b){
    var temp = toString(a)
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