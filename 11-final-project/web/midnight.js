document.onkeydown = checkey;
var px = 300;
var py = 435;      //document.getElementById("player").getAttribute('cy'); figure out whats wrong with this  
var movespeed = 5;
var checklist = ["hello"];

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
    //if (start == true && midfire == false){ make this check if player is not aganist wall, and not in cutscene or anything else
        //Horizontal Movement
        
        if (e.key == "ArrowRight" || e.key == "d"){ //Right
            px += movespeed;
        } else if(e.key == "ArrowLeft" || e.key == "a"){ //Left
            px -= movespeed;
        } else if(e.key == " "){ //Interact
            start();
            console.log("Space Pressed");
            
            interact(px, py);
        }
        console.log("player x: " + $("#player").attr("x"));
        // $("#player").attr("x", px); 
        //$("#player").attr("transform", "translate(" + px + ",0)");
        console.log(px);
        $("#player").attr('cx', px);
        // $(".player").attr('cy', py);
        //} 
}
function interact(x, y){
    log("Interaction");
    //Figure out way to check when near
    if ("hello" in checklist){
        log("CheckList: Hello")
    }
}

    