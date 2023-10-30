document.onkeydown = changeAim;
var angleAmount = 0;
var start = false;
var midfire = false;
function hideTitle(){
    $('#mainmenu').hide()
    start = true;
}

function shoot(){
    alert("PEW")
    //midfire = true;
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
    