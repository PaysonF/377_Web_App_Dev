document.onkeydown = checkey;
var px = 300;
var py = 435;      //document.getElementById("player").getAttribute('cy'); figure out whats wrong with this  
var movespeed = 5;

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
            console.log("test");
            
            //interact(px, py); in future
        }
        console.log("player x: " + $("#player").attr("x"))
        $("#player").attr("x", px); 
        console.log(px)
        // $(".player").attr('cx', px);
        // $(".player").attr('cy', py);
        //} 
}
function interact(x, y){
    print("Interaction");
    //Figure out way to check when near
}

    