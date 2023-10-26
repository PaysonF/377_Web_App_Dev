document.onkeydown = changeAim;
var angleAmount = 0;
var start = false;
function hideTitle(){
    $('#mainmenu').hide()
    start = true;
}
    
function changeAim(e){
    //console.log(start);
    if (start == true){
        if (e.key == "ArrowRight"){
            console.log("right");
            angleAmount += -5
        }else if(e.key == "ArrowLeft"){
            console.log("Left");
            angleAmount += 5
        }
        cannon = document.getElementById("barrel");
        cannon.setAttribute("transform", "rotate(" + angleAmount + ",500, 10)");
    }
}
    