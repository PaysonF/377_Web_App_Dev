$(document).ready(function() {
    rollDice();
})

function rollDice() {
    $('.pip').css("visibility", "hidden");
    var roll1 = rollDie(1);
    var roll2 = rollDie(2);

    var total = roll1 + roll2;
    
    console.log(total)
}


function rollDie(dieNum){
    var roll = Math.floor(Math.random() * 6 + 1)

    if(roll == 1) {
        $("#d" + dieNum + "p4").css("visibility", "visible");
    } else if (roll == 2) {
        $("#d" + dieNum + "p1, #d" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 3) {
        $("#d" + dieNum + "p1, #d" + dieNum + "p4, #d" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 4) {
        $("#d" + dieNum + "p1, #d" + dieNum + "p3, #d" + dieNum + "p5, #d" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 5) {
        $("#d" + dieNum + "p1, #d" + dieNum + "p2, #d" + dieNum + "p3, #d" + dieNum + "p5, #d" + dieNum + "p6, #d" + dieNum + "p7").css("visibility", "visible");
    } else {
        $("#d" + dieNum + "p1, #d" + dieNum + "p2, #d" + dieNum + "p3, #d" + dieNum + "p4, #d" + dieNum + "p5, #d" + dieNum + "p6, #d" + dieNum + "p7").css("visibility", "visible");
    }
    return roll;
}