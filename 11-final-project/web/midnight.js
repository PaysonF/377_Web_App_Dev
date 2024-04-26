// Current move method called when key is pressed
document.onkeydown = checkey;
// Moving Help coords
let px = 0;
let py = 0;
// All variables below use x,y list for various things, interactList dictates areas where the player should be able to use stuff, movelimit list prevents the player from moving when they are at the edge of a room, lastly transport list is where the "doors are" mabye make into part of the interact list but seperate
let interactList = [50, "Placeholder"];
let movelimitList = [];
let transportList = ["Plhold"];

//Arrays of points that are used by the function roomChange to change the polygon with the id of "Rooms"
// doorways should always be fifty wide! ex. (100,0 - 150,0)
//Room variable used to help with roomChange
let room = "starter";
let hallway = [[50,175], [150,175], [150,150], [200,150], [200,175], [550,175], [950,175], [950,215], [975,215], [975,260], [950,260], [950,300], [50,300]];
let starter = [[300,100], [300,200], [200,200], [200,300], [300,300], [600,300], [600,100]];
let elevator = [[300,150], [400,150], [400,100], [475,100], [475,150], [525,150], [525,100], [600,100], [600,150], [700,150], [700,400], [300,400]];
let cafe = [[50,400], [950,400], [950,100], [50,100]];
let tube = [[400,25], [600,25], [600,475], [400,475]];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Called on Save Button Press, causes save menu to appear
function SavesNavigation(){
    $("#buttons").fadeOut(300);
    $("#SavesBox").attr("opacity", "1");
}

//Function which changes arms and legs positions acccording to the faced direction
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
                if (px<= 245){
                    px+= 10; 
                }
            } else if(e.key == "ArrowLeft" || e.key == "a"){ //Left
                if (px>= -135){
                    px-= 10;
                }
            }
    } else if (e.key == "ArrowUp" || e.key == "w" || e.key == "ArrowDown" || e.key == "s"){
            //Facing Verticaly
            characterChange("Vertical");
            if(e.key == "ArrowUp" || e.key == "w"){ //Left
                if (py>= -50){
                    py-= 10
                }
            } else if(e.key == "ArrowDown" || e.key == "s"){ //Left
                if (py<= 120){
                    py+= 10 
                }
            }
    }   
    else if(e.key == ' '){ //Interact
        console.log("xmove: " + px+ ",and ymove? " + py);
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
    $("#player").attr("transform", "translate(" + px+ "," + py+ ")");

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
        //Change Objects Class to be specific to room name 
        $(".Objects" + room).fadeOut(time);
    } else if (type == "In"){
        $("#Rooms").fadeIn(time);
        $("#player").fadeIn(time);
        if (room == "starter"){
            $(".Objects").fadeIn(1500);
        }
    }
}
function roomChange(destination){
    if (room == "starter"){
        room = "hallway"  
    } else if (room == "hallway")
        room = "starter" 
    var delay = 1000;
    roomFade(delay, "Out");
    sleep(delay).then(() => { document.getElementById("Rooms").setAttribute("points", destination); });
    roomFade(1500, "In");
}