document.onkeydown = changeAim;
$(document).ready(function() {
    $('#tutStuff').hide();
});
var angleAmount = 0;
var start = false;
var midfire = false;
var tutorial = false;
var angley = 10;
var anglex = 10;
var expansion = 15;

function gameStart(){
    
    if (tutorial == true){
        $('#tutStuff').show()
        $('#mainmenu').show()
        tutorial = false;
    } else if (start == false){
        $('#mainmenu').hide()
        $('#tutStuff').hide()
        start = true;
    }
}

function tutStart(){
    tutorial = true;
    gameStart();
    cannon = document.getElementById("barrel");
}

function boomAnimation(){
    $("#ball").attr('r', expansion);
    if(expansion < 29){
        expansion += 1;
    } else{
        clearInterval(boomIntervalId)
    }
}

var shootIntervalId = 0;
var thing = 25;
function shoot(){
    if( midfire == false){
        $("#ball").attr('cx', 118.4);
        $("#ball").attr('cy', 686);
        $("#ball").attr('r', 15);
        midfire = true
        angley = 50 - angleAmount
        shootIntervalId = setInterval(ballAnimation, 20);
    }
    
}

function ballAnimation(){
    var x = parseInt($("#ball").attr('cx'));
    var y = parseInt($("#ball").attr('cy'));
    if (x > 573 && y > 500) {
        clearInterval(shootIntervalId)
        boomIntervalId = setInterval(boomAnimation, 50);
        midfire = false;
    }
    $("#ball").attr('cx', x + anglex);
    $("#ball").attr('cy', y - angley);
    angley -= 1;
    //work on above
}



function changeAim(e){
    console.log(angleAmount);
    if (start == true && midfire == false){
        if (e.key == "ArrowRight" && angleAmount < 81 || e.key == "d" && angleAmount < 81){
            console.log("right");
            angleAmount += 2
        }else if(e.key == "ArrowLeft" && angleAmount > 0 || e.key == "a" && angleAmount > 0){
            console.log("Left");
            angleAmount += -2
        } else if(e.key == " "){
            angley += angleAmount;
            //anglex += angleAmount;
            shoot();
        }
        cannon = document.getElementById("barrel");
        cannon.setAttribute("transform", "rotate(" + angleAmount + ",118.4, 686)");
    }
}
    