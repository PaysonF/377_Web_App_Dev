document.onkeydown = changeAim;
$(document).ready(function() {
    $('#tutStuff').hide();
});
var angleAmount = 0;
var start = false;
var midfire = false;
var tutorial = false;
// at start of code initialze hiding tutorial stufff (group) checkmark

//edit gameStart, make mainmenu show during tutorial and still work

function gameStart(){
    $('#mainmenu').hide()
    $('#tutStuff').hide()
    if (start == false){
        start = true;
    } else if (tutorial == true){
        $('#tutStuff').show()
        $('#mainmenu').show()
    }
}

function tutStart(){
    tutorial = true;
    gameStart();
    cannon = document.getElementById("barrel");
}

function shoot(){
    alert("PEW")
    ballAnimation();
}

function ballAnimation(){
    $( "#ball" ).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
      }, 5000, function() {
        // Animation complete.
      });
}



function changeAim(e){
    console.log(angleAmount);
    if (start == true && midfire == false){
        if (e.key == "ArrowRight" && angleAmount < 81){
            console.log("right");
            angleAmount += 2
        }else if(e.key == "ArrowLeft" && angleAmount > 0){
            console.log("Left");
            angleAmount += -2
        } else if(e.key == " "){
            shoot();
        }
        cannon = document.getElementById("barrel");
        cannon.setAttribute("transform", "rotate(" + angleAmount + ",118.4, 686)");
    }
}
    