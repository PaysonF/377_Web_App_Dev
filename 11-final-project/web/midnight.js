// Current move method called when key is pressed
if ( window.location.href != "http://localhost/377wad/11-final-project/web/title.php"){
    document.onkeydown = checkey; 
}

// Moving Help coords

let px = 340;
let py = 150;
let ex = 500;
let ey = 210;


// All variables below use x,y list for various things, interactList dictates areas where the player should be able to use stuff, movelimit list prevents the player from moving when they are at the edge of a room, lastly transport list is where the "doors are" mabye make into part of the interact list but seperate
let interactList = [50, "Placeholder"];
let movelimitList = [];
let transportList = ["Plhold"];
//Timeout for enemy until needed

//Arrays of points that are used by the function roomChange to change the polygon with the id of "Rooms"
// doorways should always be fifty wide! ex. (100,0 - 150,0)
//Room variable used to help with roomChange
var room = "starter";
// if statements to figure out starting room, based on what page of the website is open

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
    }   else if(e.key == 'm'){ //Interact
            console.log("xmove: " + px+ ",and ymove? " + py);
            interact(px, py);
            if (room == "hallway"){
                roomChange(starter); 
                room = "starter"
            } else {
                roomChange(hallway);
                room = "hallway"
            }
    } else if (e.key == 'x' ){
        
    }

    //document.getElementById("Rooms").setAttribute("transform", "translate(" + px + "," + py + ")");
    //Code which makes the player actually move
    // \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
    //movehelp Calls
    movehelp("Head");
    movehelp("Body")
    movehelp("Backarm")
    movehelp("Frontarm")
    movehelp("Backleg")
    movehelp("Frontleg")
    if (py < 250 && py > 200 && room != "hallway"){
        const myTimeout = setTimeout(enemy_ready, 2500);
        roomChange(hallway);
        room = "hallway"
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


function limit_move(x, y){
    
}

function enemy_ready(){
    if ( room == "hallway") {
        document.getElementById("evilBlob").setAttribute('visibility', 'visible');
        setInterval(enemy_move, 250)
    }
        
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
    if( ex == tarx && ey == tary){
        window.location.href = "http://localhost/377wad/11-final-project/web/title.php";  
    }
    document.getElementById("evilBlob").setAttribute('x', ex);
    document.getElementById("evilBlob").setAttribute('y', ey);
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